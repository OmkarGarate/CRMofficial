    const Org = require('../models/OrgModel')
    const jwt = require('jsonwebtoken')

    const createToken = (_id) =>{
        return jwt.sign({_id}, process.env.SECRET, {expiresIn: '1d'})
    }

    //signup org
    const signupOrg = async (req, res) =>{
        const {fullName, email, phoneNumber, password, companyName, companyEmail, orgId, empId,  tnc, userType} = req.body

        try{
            const org = await Org.signupOrg(fullName, email, phoneNumber, password, companyName, companyEmail, orgId, empId, tnc, userType)

            // const token = createToken(org._id)

            res.status(200).json({user: org});
        }catch(error){
            res.status(400).json({error: error.message})
        }
    }

    const loginOrg = async (req, res) =>{
        const {orgId, empId, password} = req.body

        try{
            const org = await Org.loginOrg(orgId, empId, password)

            const token = createToken(org._id)

            res.status(200).json({user: org, token: token});
        }catch(error){
            res.status(400).json({error: error.message})
        }
    }

    const getAllOrgs = async(req, res) =>{
        const orgs = await Org.find({}).sort({createdAt: -1})
        res.status(200).json(orgs)
    }

    const getOneOrgByOrgId = async(req, res) =>{
        const {orgId} = req.params
        const org = await Org.findOne({orgId})
        if(!org){
            return res.status(400).json({error: "No such Organisation"})
        }
        res.status(200).json(org)
    }

    const getOneOrg = async(req, res) =>{
        const {id} = req.params
        const org = await Org.findById(id)
        if(!org){
            return res.status(400).json({error: "No such Organisation"})
        }
        res.status(200).json(org)
    }


    const updateOrg = async(req, res) =>{
        try{
            const {id} = req.params
            let updateData = { ...req.body }
    
            if(req.file){
                // console.log("file is here")
                updateData.profilePic = req.file.filename;
            }
    
            const org = await Org.findOneAndUpdate({_id: id}, updateData, {new: true})
    
            if(!org){
                return res.status(404).json({error: "No such Organisation"});
            }
    
            res.status(200).json(org)
        }catch(error){
            console.error("Error updating organisation profile:", error);
            res.status(500).json({error: "Internal server error"});
        }
    }

    module.exports = {signupOrg, loginOrg, getAllOrgs, getOneOrg, updateOrg, getOneOrgByOrgId}
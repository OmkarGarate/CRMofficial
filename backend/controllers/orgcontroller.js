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

            const token = createToken(org._id)

            res.status(200).json({org: org, token: token});
        }catch(error){
            res.status(400).json({error: error.message})
        }
    }

    const loginOrg = async (req, res) =>{
        const {orgId, empId, password} = req.body

        try{
            const org = await Org.loginOrg(orgId, empId, password)

            const token = createToken(org._id)

            res.status(200).json({org: org, token: token});
        }catch(error){
            res.status(400).json({error: error.message})
        }
    }

    const getAllOrgs = async(req, res) =>{
        const orgs = await Org.find({}).sort({createdAt: -1})
        res.status(200).json(orgs)
    }

    const getOneOrg = async(req, res) =>{
        const {orgId} = req.params
        const org = await Org.findOne({orgId})
        if(!org){
            return res.status(400).json({error: "No such Organisation"})
        }

        res.status(200).json(org)
    }

    module.exports = {signupOrg, loginOrg, getAllOrgs, getOneOrg}
const HeadNew = require('../models/HeadModelNew')
const bcrypt = require('bcrypt')

const jwt = require('jsonwebtoken')

const createToken = (_id) =>{
    return jwt.sign({_id}, process.env.SECRET, {expiresIn: "1d"})
}

const signupHeadNew = async (req, res) => {
    console.log("Request Body:", req.body);

    const { firstName, middleName, surname, designation, workEmail, accessToFeed, orgId, department, empId, password, userType, mobileNumber, alternateMobileNumber, email, address, pinCode, nationality, age, bloodGroup, gender, religion, dateOfBirth, maritalStatus } = await req.body;

    try {
        const head = await HeadNew.signupHead(firstName, middleName, surname, designation, workEmail, accessToFeed, orgId, department, empId, password, userType, mobileNumber, alternateMobileNumber, email, address, pinCode, nationality, age, bloodGroup, gender, religion, dateOfBirth, maritalStatus);
        console.log(head)

        res.status(200).json({ user: head });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

const loginHeadNew = async (req, res) => {
    const { orgId, empId, password } = req.body;

    try {
        const user = await HeadNew.loginHead(orgId, empId, password);

        if (!user) {
            return res.status(400).json({ error: "User not found" });
        }

        const match = await bcrypt.compare(password, user.password);

        if (!match) {
            return res.status(400).json({ error: "Incorrect password" });
        }

        const token = createToken(user._id);

        res.status(200).json({user: user, token: token});
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

const getAllHeadsNew = async (req, res) => {
    try {
        const heads = await HeadNew.find({}).sort({ createdAt: -1 });
        res.status(200).json(heads);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const getOrgHeadsNew = async (req, res) => {
    try {
        // Assuming orgId is passed as a query parameter
        const { orgId } = req.params;
        
        // Fetch all heads with the specified orgId
        const heads = await HeadNew.find({ orgId }).sort({ createdAt: 1 });
        
        res.status(200).json(heads);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};


const getOneHeadNew = async(req, res) =>{
    const {id} = req.params
    const head = await HeadNew.findById(id)
    if(!head){
        return res.status(400).json({error: "No such Organisation"})
    }

    res.status(200).json(head)
}

const updateHeadNew = async(req, res) =>{
    try{
        const {id} = req.params
        let updateData = { ...req.body }

        if(req.file){
            // console.log("file is here")
            updateData.profilePic = req.file.filename;
        }

        const head = await HeadNew.findOneAndUpdate({_id: id}, updateData, {new: true})

        if(!head){
            return res.status(404).json({error: "No such Head"});
        }

        res.status(200).json(head)
    }catch(error){
        console.error("Error updating head profile:", error);
        res.status(500).json({error: "Internal server error"});
    }
}



module.exports = {signupHeadNew, loginHeadNew, getAllHeadsNew, getOneHeadNew, updateHeadNew, getOrgHeadsNew};
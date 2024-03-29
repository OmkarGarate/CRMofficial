const Head = require('../models/HeadModel')
const bcrypt = require('bcrypt')

const jwt = require('jsonwebtoken')

const createToken = (_id) =>{
    return jwt.sign({_id}, process.env.SECRET, {expiresIn: "1d"})
}

const signupHead = async (req, res) =>{
    const {orgId, department, role, empId, password, userType} = req.body

    try{
        const head = await Head.signupHead(orgId, department, role, empId, password, userType)

        // const token = createToken(head._id)
        res.status(200).json({user: head});
    }catch(error){
        res.status(400).json({error: error.message})
    }
}

const loginHead = async (req, res) => {
    const { orgId, empId, password } = req.body;

    try {
        const user = await Head.loginHead(orgId, empId, password);

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

const getAllHeads = async (req, res) => {
    try {
        const heads = await Head.find({}).sort({ createdAt: 1 });
        res.status(200).json(heads);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const getOneHead = async(req, res) =>{
    const {id} = req.params
    const head = await Head.findById(id)
    if(!head){
        return res.status(400).json({error: "No such Organisation"})
    }

    res.status(200).json(head)
}



module.exports = {signupHead, loginHead, getAllHeads, getOneHead};
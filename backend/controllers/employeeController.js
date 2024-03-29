const Employee = require('../models/HeadModel')
const bcrypt = require('bcrypt')

const jwt = require('jsonwebtoken')

const createToken = (_id) =>{
    return jwt.sign({_id}, process.env.SECRET, {expiresIn: "1d"})
}

const signupEmployee = async (req, res) =>{
    const {orgId, department, role, empId, password, userType} = req.body

    try{
        const emp = await Employee.signupHead(orgId, department, role, empId, password, userType)

        // const token = createToken(head._id)
        res.status(200).json({emp: emp});
    }catch(error){
        res.status(400).json({error: error.message})
    }
}

const loginEmployee = async (req, res) => {
    const { orgId, empId, password } = req.body;

    try {
        const user = await Employee.loginHead(orgId, empId, password);

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

const getAllEmployees = async(req, res) =>{
    const emps = await Employee.find({}).sort({createdAt: -1})
    res.status(200).json(emps)
}

const getOneEmployee = async(req, res) =>{
    const {id} = req.params
    const emp = await Employee.findById(id)
    if(!emp){
        return res.status(400).json({error: "No such Organisation"})
    }

    res.status(200).json(emp)
}


module.exports = {signupEmployee, loginEmployee, getAllEmployees, getOneEmployee};
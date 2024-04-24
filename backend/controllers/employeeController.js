const Employee = require('../models/EmployeeModel')
const bcrypt = require('bcrypt')
const multer = require('multer')

const jwt = require('jsonwebtoken')

let storage = multer.diskStorage({
    destination: './uploads',
    filename: (req, file, cb)=>{
        // cb(null, Date.now(+file+originalname))
        cb(null, file.originalname)
    }
})

let upload = multer({
    storage: storage
})

const createToken = (_id) =>{
    return jwt.sign({_id}, process.env.SECRET, {expiresIn: "1d"})
}

const signupEmployee = async (req, res) =>{
    const {orgId, department, role, empId, password, userType} = req.body

    try{
        const emp = await Employee.signupEmployee(orgId, department, role, empId, password, userType)

        // const token = createToken(head._id)
        res.status(200).json({emp: emp});
    }catch(error){
        res.status(400).json({error: error.message})
    }
}

const loginEmployee = async (req, res) => {
    const { orgId, empId, password } = req.body;

    try {
        const user = await Employee.loginEmployee(orgId, empId, password);

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
        return res.status(400).json({error: "No such Employee"})
    }

    res.status(200).json(emp)
}

const updateEmployee = async(req, res) =>{
    try{
        const {id} = req.params
        let updateData = { ...req.body }

        if(req.file){
            // console.log("file is here")
            updateData.profilePic = req.file.filename;
        }

        const emp = await Employee.findOneAndUpdate({_id: id}, updateData, {new: true})

        if(!emp){
            return res.status(404).json({error: "No such Employee"});
        }

        res.status(200).json(emp)
    }catch(error){
        console.error("Error updating employee profile:", error);
        res.status(500).json({error: "Internal server error"});
    }
}


module.exports = {signupEmployee, loginEmployee, getAllEmployees, getOneEmployee, updateEmployee};
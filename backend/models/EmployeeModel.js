const mongoose = require('mongoose')
const validator = require('validator')
const bcrypt = require('bcrypt')

const employeeSchema = mongoose.Schema({
    fistName:{
        type: String
    },
    middleName: {
        type: String
    },
    surname: {
        type: String
    },
    mobileNumber: {
        type: String
    },
    alternateMobileNumber: {
        type: String
    },
    email: {
        type: String
    },
    address: {
        type: String
    },
    pinCode: {
        type: String
    },
    age:{
        type: String
    },
    bloodGroup: {
        type: String
    },
    gender:{
        type: String
    },
    religion:{
        type: String
    },
    dateOfBirth: {
        type: String
    },
    maritalStatus: {
        type: String
    },
    dateOfJoining: {
        type: String
    },
    workExperience: {
        type: String
    },
    prevCompany:{
        type: String
    },
    education: {
        type: String
    },
    softSkills: {
        type: String
    },
    professionalSkills: {
        type: String
    },
    officeEmailId: {
        type: String
    },
    accommodation: {
        type: String
    },
    branch: {
        type: String
    }, 
    employeeType: {
        type: String
    },
    currentCTC:{
        type: String
    },
    employeeBenefits:{
        type: String
    },
    dateOfLeave:{
        type: String
    },
    systemUsage:{
        type: String
    },
    orgId:{
        type: String
    },
    department:{
        type:String,
        required: true
    },
    role: {
        type: String,
        required: true
    },
    empId:{
        type: String,
        required: true
    },
    password:{
        type: String,
        required: true  
    }, 
    userType: {
        type: String,
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
})

employeeSchema.statics.signupEmployee = async function(orgId, department, role, empId, password, userType)
{
    if(!orgId || !empId || !password || !role || !department || !userType)
    {
        throw Error("All fields must be filled")
    }

    // if(!validator.isEmail(empId))
    // {
    //     throw Error("Enter valid email address")
    // }

    if(!validator.isStrongPassword(password))
    {
        throw Error("Password not strong enough")

    }

    const exists = await this.findOne({empId})
        if(exists)
        {
            throw Error("Email already in use")
        }

    // const salt = await bcrypt.genSalt(10)
    // console.log("Salt:", salt)
    // const hash = await bcrypt.hash(password, salt)
    // console.log("Hash:", hash)

    const emp = await this.create({
        orgId: orgId,
        department: department,
        role: role,
        empId: empId,
        password: password,
        userType: userType
    })

    return emp

}   

employeeSchema.statics.loginEmployee = async function(orgId, empId, password) {
    if (!orgId || !empId || !password) {
        throw Error("All fields must be filled");
    }

    const emp = await this.findOne({ orgId, empId });

    if (!emp) {
        throw Error("Email doesn't exist");
    }

    // const match = await bcrypt.compare(password, emp.password);

    // if (!match) {
    //     throw Error("Incorrect password");
    // }

    if (emp.password !== password) {
        throw Error("Incorrect password");
    }

    return emp;
};


module.exports = mongoose.model('Employee', employeeSchema)
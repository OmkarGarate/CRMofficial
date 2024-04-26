const mongoose = require('mongoose')
const validator = require('validator')
const bcrypt = require('bcrypt')

const employeeSchema = mongoose.Schema({
    profilePic: {
        type: String,
        default: ""
    },
    firstName:{
        type: String,
        default: ""
    },
    middleName: {
        type: String,
        default: ""
    },
    surname: {
        type: String,
        default: ""
    },
    mobileNumber: {
        type: String,
        default: ""
    },
    alternateMobileNumber: {
        type: String,
        default: ""
    },
    email: {
        type: String,
        default: ""
    },
    address: {
        type: String,
        default: ""
    },
    pinCode: {
        type: String,
        default: ""
    },
    nationality: {
        type: String,
        default: ""
    },
    age:{
        type: String,
        default: ""
    },
    bloodGroup: {
        type: String,
        default: ""
    },
    gender:{
        type: String,
        default: ""
    },
    religion:{
        type: String,
        default: ""
    },
    dateOfBirth: {
        type: String,
        default: ""
    },
    maritalStatus: {
        type: String,
        default: ""
    },
    dateOfJoining: {
        type: String,
        default: ""
    },
    workExperience: {
        type: String,
        default: ""
    },
    prevCompany:{
        type: String,
        default: ""
    },
    education: {
        type: String,
        default: ""
    },
    softSkills: {
        type: String,
        default: ""
    },
    professionalSkills: {
        type: String,
        default: ""
    },
    officeEmailId: {
        type: String,
        default: ""
    },
    accommodation: {
        type: String,
        default: ""
    },
    branch: {
        type: String,
        default: ""
    }, 
    employeeType: {
        type: String,
        default: ""
    },
    currentCTC:{
        type: String,
        default: ""
    },
    employeeBenefits:{
        type: String,
        default: ""
    },
    dateOfLeave:{
        type: String,
        default: ""
    },
    systemUsage:{
        type: String,
        default: ""
    },
    orgId:{
        type: String,
        default: ""
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
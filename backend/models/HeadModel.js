const mongoose = require('mongoose')
const validator = require('validator')
const bcrypt = require('bcrypt')

const headSchema = mongoose.Schema({
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
    }
})

headSchema.statics.signupHead = async function(orgId, department, role, empId, password, userType)
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

    const salt = await bcrypt.genSalt(10)
    // console.log("Salt:", salt)
    const hash = await bcrypt.hash(password, salt)
    // console.log("Hash:", hash)

    const head = await this.create({
        orgId: orgId,
        department: department,
        role: role,
        empId: empId,
        password: hash,
        userType: userType
    })

    return head

}   

headSchema.statics.loginHead = async function(orgId, empId, password) {
    if (!orgId || !empId || !password) {
        throw Error("All fields must be filled");
    }

    const head = await this.findOne({ orgId, empId });

    if (!head) {
        throw Error("Email doesn't exist");
    }

    const match = await bcrypt.compare(password, head.password);

    if (!match) {
        throw Error("Incorrect password");
    }

    return head;
};


module.exports = mongoose.model('Head', headSchema)
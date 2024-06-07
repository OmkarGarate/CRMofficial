const mongoose = require('mongoose')
const validator = require('validator')
const bcrypt = require('bcrypt')

const headSchema = mongoose.Schema({
    fullName:{
        type: String,
        // required: true
    },
    email:{
        type: String,
        // required: true
    },
    phoneNumber:{
        type: String,
        // required: true
    },
    password:{
        type: String,
        // required: true
    },
    companyName:{
        type: String,
        // required: true  
    },
    companyEmail:{
        type: String,
        // required: true
    },
    orgId:{
        type: String,
        // required: true
    },
    empId:{
        type: String, 
        // required: true
    },   
    tnc:{
        type: Boolean,
        // required: true
    },
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
    department:{
        type:String,
        default: ""
    },
    designation:{
        type:String,
        default: ""
    },
    accessToFeed:{
        type: String,
        // default: false
    },
    workEmail:{
        type: String,
        default: ""
    },
    documents:[{
        type: String
    }],
    attendanceDays:[
        {
            type: String
        }
    ],
    clockIn:{
        type: String
    },
    clockOut:{
        type: String
    },
    BreakTime:{
        type: String
    },
    reportingTo:{
        type: String
    },
    wrOfferLetter:{
        type: String
    },
    userType: {
        type: String,
        // required: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
}) 

headSchema.statics.signupHead = async function(firstName, middleName, surname, designation, workEmail, accessToFeed, orgId, department, empId, password, userType) {
    if (!firstName || !middleName || !surname || !designation || !workEmail || !orgId || !department || !empId || !password || !userType) {
        throw Error("All fields must be filled");
    }

    const exists = await this.findOne({ orgId, empId });
    if (exists) {
        throw Error("Employee ID already in use");
    }

    const head = await this.create({
        firstName, 
        middleName, 
        surname, 
        designation, 
        workEmail, 
        accessToFeed, 
        orgId, 
        department, 
        empId, 
        password, 
        userType
    });

    return head;
}
  
headSchema.statics.loginHead = async function(orgId, empId, password) {
    if (!orgId || !empId || !password) {
        throw Error("All fields must be filled");
    }

    const head = await this.findOne({ orgId, empId });

    if (!head) {
        throw Error("Email doesn't exist");
    }

    // Compare passwords (plaintext comparison)
    if (head.password !== password) {
        throw Error("Incorrect password");
    }

    return head;
}


module.exports = mongoose.model('Head', headSchema)
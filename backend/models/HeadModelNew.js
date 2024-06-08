const mongoose = require("mongoose");
const validator = require("validator");

const headSchema = mongoose.Schema({
  fullName:{
    type: String,
},
email:{
    type: String,
},
phoneNumber:{
    type: String,
},
password:{
    type: String,
    required: true
},
companyName:{
    type: String,
},
companyEmail:{
    type: String,
},
orgId:{
    type: String,
    required: true
},
empId:{
    type: String, 
    required: true
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
    type: Boolean
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
role: {
    type: String,
    default: ""
},
reportingTo:{
    type: String
},
wrOfferLetter:{
    type: String
},
userType: {
    type: String,
    required: true
},
createdAt: {
    type: Date,
    default: Date.now
}
});

headSchema.statics.signupHead = async function (
    firstName, middleName, surname, designation, workEmail, accessToFeed, orgId, department, empId, password, userType, mobileNumber, alternateMobileNumber, email, address, pinCode, nationality, age, bloodGroup, gender, religion, dateOfBirth, maritalStatus
) {
  if (
    !firstName || !middleName || !surname || !designation || !workEmail  ||accessToFeed ||  !orgId || !department || !empId || !password || !userType || !mobileNumber || !alternateMobileNumber || !email || !address || !pinCode || !nationality || !age || !bloodGroup || !gender || !religion || !dateOfBirth  || !maritalStatus
  ) {
    throw new Error("All fields must be filled");
  }

  if (!validator.isEmail(workEmail)) {
    throw new Error("Email is not valid");
  }

  if (!validator.isStrongPassword(password)) {
    throw new Error("Password not strong enough");
  }

  const exists = await this.findOne({ workEmail });
  if (exists) {
    throw new Error("Email already in use");
  }

  const head = await this.create({
    firstName: firstName,
    middleName: middleName,
    surname: surname,
    designation: designation,
    department: department,
    workEmail: workEmail,
    accessToFeed: accessToFeed,
    empId: empId,
    orgId: orgId,
    userType: userType,
    password: password,
    mobileNumber: mobileNumber,
    alternateMobileNumber : alternateMobileNumber, 
    email : email, 
    address : address, 
    pinCode : pinCode, 
    nationality : nationality, 
    age : age, 
    bloodGroup : bloodGroup, 
    gender : gender, 
    religion : religion, 
    dateOfBirth : dateOfBirth, 
    maritalStatus : maritalStatus

  });

  return head;
};

headSchema.statics.loginHead = async function (orgId, empId, password) {
  if (!orgId || !empId || !password) {
    throw new Error("All fields must be filled");
  }

  const org = await this.findOne({ empId });
  if (!org) {
    throw new Error("Incorrect employee ID");
  }

  if (org.password !== password) {
    throw new Error("Incorrect password");
  }

  return org;
};

module.exports = mongoose.model("HeadNew", headSchema);

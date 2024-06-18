    const mongoose = require('mongoose')
    const validator = require('validator')

    const orgSchema = mongoose.Schema({
        fullName:{
            type: String,
            required: true
        },
        email:{
            type: String,
            required: true
        },
        phoneNumber:{
            type: String,
            required: true
        },
        password:{
            type: String,
            required: true
        },
        companyName:{
            type: String,
            required: true  
        },
        companyEmail:{
            type: String,
            required: true
        },
        orgId:{
            type: String,
            required: true
        },
        empId:{
            type: String, 
            required: true
        },   
        tnc:{
            type: Boolean,
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
    }) 

    orgSchema.statics.signupOrg = async function (fullName, email, phoneNumber, password, companyName, companyEmail, orgId, empId, tnc, userType)
    {
        if(!fullName || !email || !phoneNumber || !password || !companyName || !companyEmail || !orgId || !empId || !tnc || !userType)
        {
            throw Error("All fields must be filled")
        }

        if(!validator.isEmail(email))
        {
            throw Error("Email is not valid")
        }

        if(!validator.isStrongPassword(password))
        {
            throw Error("Password not strong enough")
        }

        const exists = await this.findOne({email})
        if(exists)
        {
            throw Error("Email already in use")
        }

        // const salt = await bcrypt.genSalt(10)
        // const hash = await bcrypt.hash(password, salt)

        const org = await this.create({
            fullName: fullName,
            email: email,
            phoneNumber: phoneNumber,
            password: password,
            companyName: companyName,
            companyEmail: companyEmail,
            orgId: orgId,
            empId: empId,
            tnc: tnc,
            userType: userType
        })

        return org

    }


    orgSchema.statics.loginOrg= async function(orgId, empId, password)
    {
        if(!orgId || !empId || !password)
        {
            throw Error("All fields must be filled")
        }

        const org = await this.findOne({empId})
        if(!org)
        {
            throw Error("Incorrect employee ID")
        }

        // const match = await bcrypt.compare(password, org.password)

        // if(!match)
        // {
        //     throw Error("Incorrect Password")
        // }


         // Compare passwords (plaintext comparison)
        if (org.password !== password) {
            throw Error("Incorrect password");
        }

        return org
    }   

    module.exports = mongoose.model("Org", orgSchema)
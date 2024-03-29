    const mongoose = require('mongoose')
    const validator = require('validator')
    const bcrypt = require('bcrypt')

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
        userType:{
            type: String,
            required: true
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

        const salt = await bcrypt.genSalt(10)
        const hash = await bcrypt.hash(password, salt)

        const org = await this.create({
            fullName: fullName,
            email: email,
            phoneNumber: phoneNumber,
            password: hash,
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

        const match = await bcrypt.compare(password, org.password)

        if(!match)
        {
            throw Error("Incorrect Password")
        }

        return org
    }   

    module.exports = mongoose.model("Org", orgSchema)
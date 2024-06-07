const Org = require('../models/OrgModel')
const Employee = require('../models/EmployeeModel')
const Head = require('../models/HeadModelNew')
    const jwt = require('jsonwebtoken')

    const createToken = (_id) =>{
        return jwt.sign({_id}, process.env.SECRET, {expiresIn: '1d'})
    }

    const login = async (req, res) => {
        const { orgId, empId, password } = req.body;
    
        try {
            const org = await Org.findOne({ orgId, empId });
            const head = await Head.findOne({ orgId, empId });
            const emp = await Employee.findOne({ orgId, empId });
    
            if (org) {
                try {
                    await Org.loginOrg(orgId, empId, password);
                    const token = createToken(org._id);
                    res.status(200).json({ user: org, token });
                } catch (error) {
                    res.status(400).json({ error: error.message });
                }
            } else if (head) {
                try {
                    await Head.loginHead(orgId, empId, password);
                    const token = createToken(head._id);
                    res.status(200).json({ user: head, token });
                } catch (error) {
                    res.status(400).json({ error: error.message });
                }
            } else if (emp) {
                try {
                    await Employee.loginEmployee(orgId, empId, password);
                    const token = createToken(emp._id);
                    res.status(200).json({ user: emp, token });
                } catch (error) {
                    res.status(400).json({ error: error.message });
                }
            } else {
                throw Error("Incorrect employee ID");
            }
        } catch (error) {
            res.status(400).json({ error: error.message });
        }
    };
    

    module.exports = {login}
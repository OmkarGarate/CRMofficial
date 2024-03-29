const express = require('express')

const {signupEmployee, loginEmployee, getAllEmployees, getOneEmployee} = require('../controllers/employeeController')

const router = express.Router()

//signup
router.post('/signupEmployee', signupEmployee)

//login 
router.get('/loginEmployee', loginEmployee)

router.get('/getAllEmployees', getAllEmployees)

router.get('/getOneEmployee/:id', getOneEmployee)

module.exports = router
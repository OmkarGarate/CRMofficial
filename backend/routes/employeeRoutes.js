const express = require('express')
const multer = require('multer')

const {signupEmployee, loginEmployee, getAllEmployees, getOneEmployee, updateEmployee} = require('../controllers/employeeController')

const router = express.Router()

//storage and filename setting  
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

//signup
router.post('/signupEmployee', signupEmployee)

//login 
router.get('/loginEmployee', loginEmployee)

router.get('/getAllEmployees', getAllEmployees)

router.get('/getOneEmployee/:id', getOneEmployee)

router.patch('/updateEmployee/:id', upload.single('uploaded_file'), updateEmployee)

module.exports = router
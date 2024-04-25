const express = require('express')
const multer = require('multer')

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

const {signupOrg, loginOrg, getAllOrgs, getOneOrg, updateOrg} = require('../controllers/orgcontroller')

router.post('/signupOrg', signupOrg)

router.post('/loginOrg', loginOrg)

router.get('/getAllOrgs', getAllOrgs)

router.get('/getOneOrg/:orgId', getOneOrg)

router.patch('/updateOrg/:id', upload.single('uploaded_file'), updateOrg)

module.exports = router
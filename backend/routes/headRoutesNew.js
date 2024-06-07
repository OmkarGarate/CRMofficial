const express = require('express')
const multer = require('multer')

const router = express.Router()

const {signupHeadNew, loginHeadNew, getAllHeadsNew, getOneHeadNew, updateHeadNew, getOrgHeadsNew} = require('../controllers/headControllerNew')


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

router.post('/signupHeadNew', signupHeadNew)

router.get('/getAllHeadsNew', getAllHeadsNew)

router.post('/loginHeadNew', loginHeadNew)

router.get('/getAllHeadsNew', getAllHeadsNew)

router.get('/getOrgHeadsNew/:orgId', getOrgHeadsNew)

router.get('/getOneHeadNew/:id', getOneHeadNew)

router.patch('/updateHeadNew/:id', upload.single('uploaded_file'), updateHeadNew)

module.exports = router
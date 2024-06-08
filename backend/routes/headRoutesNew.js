const express = require('express')
const multer = require('multer')

const router = express.Router()

const {signupHeadNew, loginHeadNew, getAllHeadsNew, getOneHeadNew, updateHeadNew, getOrgHeadsNew} = require('../controllers/headControllerNew')


//storage and filename setting  
let storage = multer.diskStorage({
    destination: './uploads',
    filename: (req, file, cb) => {
        cb(null, file.originalname);
    }
});

let upload = multer({
    storage: storage
}).array('documents', 4); // 'documents' should match the name attribute of your file input in the form, and 4 indicates the maximum number of files allowed




router.post('/signupHeadNew', upload, signupHeadNew)

router.get('/getAllHeadsNew', getAllHeadsNew)

router.post('/loginHeadNew', loginHeadNew)

router.get('/getAllHeadsNew', getAllHeadsNew)

router.get('/getOrgHeadsNew/:orgId', getOrgHeadsNew)

router.get('/getOneHeadNew/:id', getOneHeadNew)

router.patch('/updateHeadNew/:id', upload, updateHeadNew)

module.exports = router
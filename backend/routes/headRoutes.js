const express = require('express')
const multer = require('multer')

const router = express.Router()

const {signupHead, loginHead, getAllHeads, getOneHead, updateHead} = require('../controllers/headController')


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

router.post('/signupHead', signupHead)

router.post('/loginHead', loginHead)

router.get('/getAllHeads', getAllHeads)

router.get('/getOneHead/:id', getOneHead)

router.patch('/updateHead/:id', upload.single('uploaded_file'), updateHead)

module.exports = router
const express = require('express')

const router = express.Router()

const {signupHead, loginHead, getAllHeads, getOneHead} = require('../controllers/headController')

router.post('/signupHead', signupHead)

router.post('/loginHead', loginHead)

router.get('/getAllHeads', getAllHeads)

router.get('/getOneHead/:id', getOneHead)

module.exports = router
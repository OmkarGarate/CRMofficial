const express = require('express')
const multer = require('multer')
const {createFeed, updateFeed, getAllFeed, deleteFeed} = require('../controllers/feedController')

const router = express.Router()


router.get('/getAllFeed', getAllFeed)

router.post('/createFeed', createFeed)

router.patch('/updateFeed/:id', updateFeed)

router.delete('/deleteFeed/:id', deleteFeed)

module.exports = router
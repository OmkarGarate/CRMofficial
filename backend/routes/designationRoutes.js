const express = require('express')

const {createDes, getAllDes, updateDes, deleteDes} = require('../controllers/designationController')

const router = express.Router()

router.post('/createDes', createDes)

router.get('/getAllDes', getAllDes)

router.patch('/updateDes/:id', updateDes)

router.delete('/deleteDes/:id', deleteDes)

module.exports = router
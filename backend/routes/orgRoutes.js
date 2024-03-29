const express = require('express')

const router = express.Router()

const {signupOrg, loginOrg, getAllOrgs, getOneOrg} = require('../controllers/orgcontroller')

router.post('/signupOrg', signupOrg)

router.post('/loginOrg', loginOrg)

router.get('/getAllOrgs', getAllOrgs)

router.get('/getOneOrg/:orgId', getOneOrg)



module.exports = router
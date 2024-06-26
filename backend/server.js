const express = require('express');
require('dotenv').config()
const mongoose = require('mongoose')
const cors = require('cors')
const employeeRoutes = require('./routes/employeeRoutes')
const orgRoutes = require('./routes/orgRoutes')
const headRoutes = require('./routes/headRoutes')
const headRoutesNew = require('./routes/headRoutesNew')
const loginRoutes = require('./routes/loginRoute')
const feedRoutes = require('./routes/feedRoutes')
const headDocsRoutes = require('./routes/HeadDocRoute')
const designationRoutes = require('./routes/designationRoutes')
const bodyParser = require('body-parser');

const app = express()

mongoose.connect(process.env.URI)
    .then(() => {
        console.log('Connected to database & listening to port', process.env.PORT)
    })
    .catch((error) => {
        console.error('Error connecting to the database:', error);
    });

app.get('/', (req, res)=>{
    res.send("Hello world")
})

//middleware
app.use(cors())
app.use(bodyParser.json())//to use body of request(req.body())
app.use(bodyParser.urlencoded({extended:true}))
// app.use(bodyParser.urlencoded({extended:false}))
app.use(express.json())

//routes
app.use('/employees', employeeRoutes)
app.use('/orgs', orgRoutes)
app.use('/heads', headRoutes)
app.use('/headsNew', headRoutesNew)
app.use('/headDocs', headDocsRoutes)
app.use('/logins', loginRoutes)
app.use('/feeds', feedRoutes)
app.use('/des', designationRoutes)
app.use('/uploads', express.static('uploads'));
app.use((req, res, next)=>{
    console.log(req.path, req.method)
    next()
})

app.listen(process.env.PORT, (req, res)=>{
    console.log("Listening to port no. ", process.env.PORT)
})
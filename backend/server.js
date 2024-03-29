const express = require('express');
require('dotenv').config()
const mongoose = require('mongoose')
const cors = require('cors')
const employeeRoutes = require('./routes/employeeRoutes')
const orgRoutes = require('./routes/orgRoutes')
const headRoutes = require('./routes/headRoutes')
const loginRoutes = require('./routes/loginRoute')

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
app.use(express.json())
app.use(cors())

//routes
app.use('/employees', employeeRoutes)
app.use('/orgs', orgRoutes)
app.use('/heads', headRoutes)
app.use('/logins', loginRoutes)

app.listen(process.env.PORT, (req, res)=>{
    console.log("Listening to port no. ", process.env.PORT)
})
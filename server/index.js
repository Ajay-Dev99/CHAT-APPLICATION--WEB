const express = require('express')
const morgan = require('morgan')
require('dotenv').config()
const cookieParser = require('cookie-parser')
const dbConnection = require('./config/dbConnection')
const apiRouter = require('./routes')

const app = express()

//Database connection
dbConnection()

//Middlewares
app.use(cookieParser())
app.use(express.json())
app.use(morgan('dev'))

//Routes
app.use("/api", apiRouter)

//Port
app.listen(process.env.PORT, (err) => {
    err ? console.log(err) : console.log(`server starts on port ${process.env.PORT}`);
})
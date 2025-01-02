const express = require('express')
const morgan = require('morgan')
require('dotenv').config()

const dbConnection = require('./config/dbConnection')
const apiRouter = require('./routes')

const app = express()
dbConnection()


app.use(morgan('dev'))
app.use("/api", apiRouter)


app.listen(process.env.PORT, (err) => {
    err ? console.log(err) : console.log(`server starts on port ${process.env.PORT}`);
})
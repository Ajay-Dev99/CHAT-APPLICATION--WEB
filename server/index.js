const express = require('express')
const morgan = require('morgan')
require('dotenv').config()
const cookieParser = require('cookie-parser')
const dbConnection = require('./config/dbConnection')
const apiRouter = require('./routes')
const cors = require('cors')

const app = express()

//Database connection
dbConnection()

//Middlewares
app.use(cors({
    origin: ["http://localhost:5000", "http://192.168.1.72:5000"], // Your frontend URL
    credentials: true  // Allow sending cookies
}));

app.use(cookieParser())
app.use(express.json())
app.use(morgan('dev'))

//Routes
app.use("/api", apiRouter)

//Port
app.listen(process.env.PORT, (err) => {
    err ? console.log(err) : console.log(`server starts on port ${process.env.PORT}`);
})
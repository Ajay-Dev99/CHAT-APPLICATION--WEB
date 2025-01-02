const userRoutes = require("./userRoutes")

const v1Router = require('express').Router()


v1Router.use('/user', userRoutes)

module.exports = v1Router
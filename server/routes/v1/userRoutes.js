const { register, login } = require('../../controllers/userControllers')

const userRoutes = require('express').Router()

userRoutes.post('/register', register)
userRoutes.post('/login', login)

module.exports = userRoutes
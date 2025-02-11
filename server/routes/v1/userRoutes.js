const { register, login, checkUser, logout, listUsers } = require('../../controllers/userControllers')
const upload = require('../../middlewares/multer')
const authUser = require('../../middlewares/userAuth')

const userRoutes = require('express').Router()



userRoutes.get('/check-user', authUser, checkUser)
userRoutes.post('/user-register', upload.single('image'), register)
userRoutes.post('/login', login)
userRoutes.post('/user-logout', logout)
userRoutes.get('/users-list', authUser, listUsers)

module.exports = userRoutes
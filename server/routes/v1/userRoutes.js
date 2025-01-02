const userRoutes = require('express').Router()

userRoutes.post('/login', (req, res) => {
    res.json('user api hitted')
})

module.exports = userRoutes
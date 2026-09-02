const express = require("express")
const authController = require('../controllers/auth.controller')

const authRouter = express.Router()


//Register Api
authRouter.post('/register', authController.registerController)

//Login
authRouter.post('/login', authController.loginController)

module.exports = authRouter
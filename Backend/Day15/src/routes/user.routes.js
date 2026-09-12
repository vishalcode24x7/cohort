const express = require('express');
const userController = require("../controllers/user.controller")
const identifyUser = require("../middlewares/auth.middleware")

const userRouter = express.Router();

//api
userRouter.post("/follow/:username", identifyUser, userController.followUserController)



module.exports = userRouter;
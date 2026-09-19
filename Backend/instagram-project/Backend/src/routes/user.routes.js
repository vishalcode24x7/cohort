const express = require('express')
const userController = require("../controllers/user.controller")
const identifyUser = require("../middlewares/auth.middleware")

const userRouter = express.Router();

// Post /api/user/follow/:userid
userRouter.post("/follow/:username", identifyUser, userController.followUserController)

// Post /api/user/unfollow/:userid
userRouter.post("/unfollow/:username", identifyUser, userController.unfollowUserController)


module.exports = userRouter
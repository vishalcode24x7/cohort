const express = require('express')
const userController = require('../controllers/user.controller');
const identifyUser = require('../middlewares/auth.middleware');

const userRouter = express.Router();

// POST /api/users/follow/:userid
userRouter.post("/follow/:username", identifyUser, userController.followUserController)


//Post /api/users/unfollow/:userid
userRouter.post("/unfollow/:username", identifyUser, userController.unfollowUserController)

module.exports = userRouter
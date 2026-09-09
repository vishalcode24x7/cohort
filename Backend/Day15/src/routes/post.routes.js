const express = require('express')
const postRouter = express.Router()
const postController = require('../controllers/post.controller')
const multer = require('multer')
const upload = multer({ storage: multer.memoryStorage() })
const identifyuser = require('../middlewares/auth.middleware')

postRouter.post('/', upload.single("image"),identifyuser, postController.createPostController)

postRouter.get('/', identifyuser , postController.getPostController)

postRouter.get('/details/:postId', identifyuser, postController.getPostDetailsController)

module.exports = postRouter
 
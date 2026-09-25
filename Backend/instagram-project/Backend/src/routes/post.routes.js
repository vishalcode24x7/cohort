const express = require("express")
const postRouter = express.Router()
const postController = require("../controllers/post.controller")
const multer = require("multer")
const upload = multer({storage: multer.memoryStorage()})
const identifyUser = require("../middlewares/auth.middleware")

//POST /api/posts/ [protedted = token]
postRouter.post("/",upload.single("image"), identifyUser, postController.createPostController)

//GET /api/posts
postRouter.get("/", identifyUser, postController.getPostController)

//GET /api/posts/details/:postid
postRouter.get("/details/:postId", identifyUser, postController.getPostDetailsController)

//POST /api/posts/like/:postId
postRouter.post("/like/:postId", identifyUser, postController.likePostController)

//POST /api/posts/like/:postId
postRouter.post("/unlike/:postId", identifyUser, postController.unlikePostController)

//GET /api/posts/feed
postRouter.get("/feed", identifyUser, postController.getFeedController)

module.exports = postRouter

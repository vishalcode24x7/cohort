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

module.exports = postRouter

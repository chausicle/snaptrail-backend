const express = require("express")
const router = express.Router()
const postsCtr = require("../controllers/posts")
const authorization = require("../middleware/authorization")

router.get("/", postsCtr.getAllPosts)
router.get("/:id/user", authorization.checkForToken, authorization.parseToken, authorization.verifyToken, postsCtr.getPostsByUserId)
router.post("/", authorization.checkForToken, authorization.parseToken, authorization.verifyToken, postsCtr.createNewPost)

module.exports = router

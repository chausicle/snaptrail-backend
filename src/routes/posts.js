const express = require("express")
const router = express.Router()
const postsCtr = require("../controllers/posts")
const verifyToken = require("../middleware/authorization")

router.get("/", postsCtr.getAllPosts)
router.post("/", verifyToken, postsCtr.createNewPost)

module.exports = router

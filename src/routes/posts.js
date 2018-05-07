const express = require("express")
const router = express.Router()
const postsCtr = require("../controllers/posts")

router.get("/", postsCtr.getAllPosts)
router.post("/", postsCtr.createNewPost)

module.exports = router

const express = require("express")
const router = express.Router()
const postsCtr = require("../controllers/posts")

router.get("/", postsCtr.getAllPosts)

module.exports = router

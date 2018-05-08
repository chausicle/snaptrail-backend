const express = require("express")
const router = express.Router()
const commentsCtr = require("../controllers/comments")
const authorization = require("../middleware/authorization")

router.get("/", commentsCtr.getAllComments)
router.post("/", authorization.checkForToken, authorization.parseToken, authorization.verifyToken, commentsCtr.createComment)

module.exports = router

const express = require("express");
const router = express.Router();
const likesCtr = require("../controllers/likes");
const authorization = require("../middleware/authorization");

router.get("/", likesCtr.getAllLikes);
router.post("/", authorization.checkForToken, authorization.parseToken, authorization.verifyToken, likesCtr.createLike);
router.delete("/:id", authorization.checkForToken, authorization.parseToken, authorization.verifyToken, likesCtr.deleteLike);

module.exports = router;

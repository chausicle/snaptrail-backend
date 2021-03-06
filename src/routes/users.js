const express = require("express");
const router = express.Router();
const usersCtr = require("../controllers/users");
const authorization = require("../middleware/authorization");

router.get("/", usersCtr.getAllUsers);
router.get("/:id", usersCtr.getUserById);
router.get("/:name/token", authorization.checkForToken, authorization.parseToken, authorization.verifyToken, usersCtr.getuserByToken)
router.patch("/:id", authorization.checkForToken, authorization.parseToken, authorization.verifyToken, usersCtr.updateUserProfileImage);

module.exports = router

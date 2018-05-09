const express = require("express");
const router = express.Router();
const usersCtr = require("../controllers/users");

router.get("/", usersCtr.getAllUsers);
router.get("/:id", usersCtr.getUserById);

module.exports = router

const express = require("express")
const router = express.Router()
const signupCtr = require("../controllers/signup")

router.post("/", signupCtr.createAccount)

module.exports = router

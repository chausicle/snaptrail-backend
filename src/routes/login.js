const express = require("express")
const router = express.Router()
const loginCtr = require("../controllers/login")

router.post("/", loginCtr.checkLogin)

module.exports = router

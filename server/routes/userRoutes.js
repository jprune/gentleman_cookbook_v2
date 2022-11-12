const express = require("express")
const router = express.Router()

//controller handles all logic for methods
const userController = require("../controllers/userController")

//create user
router.post("/register", userController.register)
//get User
router.get("/list", userController.list)

module.exports = router
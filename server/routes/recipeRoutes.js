const express = require("express")
const router = express.Router()

//controller handles all logic for methods
const recipeController = require("../controllers/recipeController")

//create recipe
router.post("/add", recipeController.add)
//get recipe
router.get("/list", recipeController.list)
//find
router.get("/find", recipeController.find)
module.exports = router
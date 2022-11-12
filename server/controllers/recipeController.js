const Recipe = require("../models/Recipe")

module.exports.add = async (req, res) => {
    try {
        const recipeAdded = await Recipe.create(req.body)         
        console.log("🚀 ~ file: recipeController.js ~ line 6 ~ module.exports.add= ~ recipeAdded", recipeAdded)
        
        res.send({success: true})
    } catch (error) {
        console.log("error creating user:", error.message)
        res.send({
            success: false,
            error: error.message
        })
    }
}

module.exports.list = async (req, res) => {
    try {
        const allRecipes = await Recipe.find()       
        console.log("🚀 ~ file: recipeController.js ~ line 21 ~ module.exports.list= ~ allRecipes", allRecipes)

        res.send({
            success: true, 
            users: data,
        })
    } catch (error) {
        console.log("error listing recipe", error.message)
        res.send({
            success: false,
            error: error.message
        })
    }
}

module.exports.find = async (req, res) => {
    try {
        const specificRecipe = await Recipe.find(req.query)       
        console.log("🚀 ~ file: recipeController.js ~ line 39 ~ module.exports.find= ~ specificRecipe", specificRecipe)

        res.send({
            success: true, 
            users: data,
        })
    } catch (error) {
        console.log("error finding recipe:", error.message)
        res.send({
            success: false,
            error: error.message
        })
    }
}
const mongoose = require("mongoose")
const {Schema} = mongoose

const ingredientsSchema = new Schema ({
    name: {
        type: String,
        required: true,
    },
    measurementType: {
        type: String,
        required: true,
    },
    measurementAmount: {
        type: String,
        required: true,
    }
})

const commentsSchema = new Schema({
    date: {
        type: String,
    },
    user: {
        type: String,
    },
    comment: {
        type: String,
    }
})

//create userInstance of class schema
const recipeSchema = new Schema({
    title: {
        type: String,
        required: true,
    },
    picture: {
        type: Image,
        required: true,
    },
    ingredients: {
        type: [ingredientsSchema],
    },
    recipeInstructions: {
        type: String,
        required: true,
    },
    comments: {
        type: [commentsSchema],
    },
    createdAt: {
        type: Date.now,
    },
    numberOfRatings: {
        type: Number,
    },
    averageOfRatings: {
        type: mongoose.Types.Decimal128
    },
    userId: {
        type: String
    },
    mealPhotos: {
        type: [String]
    },
    tags: {
        type: [String]
    }
})
module.exports = mongoose.model("Recipe", recipeSchema)
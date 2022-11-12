const mongoose = require("mongoose")
const {Schema} = mongoose

//create userInstance of class schema
const userSchema = new Schema({
    email: {
        type: String,
        required: true,
        unique: true,
    },
    username: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true
    }
})

module.exports = mongoose.model("User", userSchema)
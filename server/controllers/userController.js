const User = require("../models/User")

module.exports.register = async (req, res) => {
    try {
        const userCreated = await User.create(req.body)         
        console.log("🚀 ~ file: userController.js ~ line 6 ~ module.exports.register= ~ userCreated", userCreated)
        
        res.send({ success: true })
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
        const data = await User.find()       
        console.log("🚀 ~ file: userController.js ~ line 20 ~ UserData", data)

        res.send({
            success: true, 
            users: data,
        })
    } catch (error) {
        console.log("error creating user:", error.message)
        res.send({
            success: false,
            error: error.message
        })
    }
}
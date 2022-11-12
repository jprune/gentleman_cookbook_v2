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

module.exports.login = async (req, res) => {

    try {
        console.log("🚀 ~ login here: ")

        const {emailOrUsername, password} = req.body

        if (!emailOrUsername || !password) {
            res.send({success: false, error: "not fitting credentials"})
            return
        }

        const userFound = await User.find({
            $or: [{username: emailOrUsername}, {email: emailOrUsername}],
            password: password
        }).select('-__v -password')
        console.log("🚀 ~ userFound", userFound)

        if (!userFound.length) {
            res.send({success: false, error: "no user found. Sign Up"})
            return
        }
        res.send({success: true, user: userFound[0]})
    } catch (error) {
        console.log("🚀 ~ Error in Login users", error.message)
        res.send({success: false, error: error.message})
    }
}
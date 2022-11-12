const mongoose = require("mongoose")

//connect
module.exports = async () => {
    try {
        await mongoose.connect(process.env.DB_URI_STRING)
        console.log("connected to db")
    } catch (error) {
        console.log("🚀 ~ file: db.js ~ line 9 ~ failed to connect to db", error)
        process.exit(1)
    }
}
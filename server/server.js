const express = require("express")
const app = express();
require("dotenv").config()
const db = require("./config/db")
db();


const port = process.env.PORT || 5000
app.listen(port, () => console.log("listening to port", port))
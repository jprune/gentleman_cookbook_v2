const express = require("express")
const app = express();
require("dotenv").config()
const db = require("./config/db")
db();

//middleware

app.use(express.json())
app.use("/user", require("./routes/userRoutes"))
app.use("/recipe", require("./routes/recipeRoutes"))

const port = process.env.PORT || 5000
app.listen(port, () => console.log("listening to port", port))
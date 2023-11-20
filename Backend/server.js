require("dotenv").config()
var cors = require('cors')
const express = require("express")
const app = express()
const mongoose = require("mongoose")

mongoose.connect(process.env.DATABASE_URL)
const db = mongoose.connection
db.once("error", (err) => console.error(err))
db.on("open", () => console.log("Connected to database"))

app.use(cors());
app.use(express.json())

const router = require("./routers/route.js")
app.use('/user', router)

app.listen(3001, () => console.log("Server started"))

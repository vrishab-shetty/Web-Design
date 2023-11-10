require('dotenv').config()

const { error } = require('console')
const express = require('express')
const app = express()
const mongoose = require('mongoose')

mongoose.connect(process.env.DATABASE_URL)
const db = mongoose.connection
db.on('error', (error) => console.error(error))
db.once('open', () => console.log("Connected to Database"))

app.use(express.json())

const userRouter = require("./routes.js")
app.use('/user', userRouter)

app.listen(3000, () => console.log("Server Started"))


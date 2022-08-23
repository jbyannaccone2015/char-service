const express = require('express');
const app = express();
const mongoose = require('mongoose')
const cors = require('cors')
require('dotenv').config()
// app.use(cors({ origin: ["http://localhost:3000"], credentials: true}))
app.use(cors({ origin: ["https://gatekeep.netlify.app/"], credentials: true}))

mongoose.connect(`mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@cluster0.vmuwpnk.mongodb.net/gkinfo`)

app.use(express.json());

app.use('/character', require('./routes/characterRouter'))
app.use('/characters', require('./routes/userBasedRouter'))

app.listen(process.env.PORT, () => {
    console.log(`The server is running on ${process.env.PORT}`)
})
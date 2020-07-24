const express = require('express')
const mongoose = require('mongoose')
const url = "mongodb+srv://Admin:Admin123@ofm-server.oowbq.mongodb.net/ofm-data?retryWrites=true&w=majority"

const app = express();
mongoose.connect(url , { useNewUrlParser: true })
const con = mongoose.connection

con.on('open', () => {
    console.log("connected...")
})
app.use(express.json())
app.listen(9000, () =>{
    console.log("running...")
})

const playersRouter = require('./routes/players')
app.use('/players',playersRouter)
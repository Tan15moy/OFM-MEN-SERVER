const express = require('express')
const mongoose = require('mongoose')
const url = "mongodb+srv://Admin:Admin123@ofm-server.oowbq.mongodb.net/football_manager?retryWrites=true&w=majority"

const app = express();
mongoose.connect(url , { useNewUrlParser: true, useUnifiedTopology: true })
const con = mongoose.connection

con.on('open', () => {
    console.log("Mongodb Atlas connected...")
})
app.use(express.json())

const port = process.env.PORT || 9000
const host ='0.0.0.0'
app.listen(port,host, () =>{
    console.log("Server running...on port: "+port)
})

const playersRouter = require('./routes/players')
app.use('/players',playersRouter)
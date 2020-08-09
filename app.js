const express = require('express')
const mongoose = require('mongoose')
var cors = require('cors')

const url = "mongodb+srv://Admin:Admin123@ofm-server.oowbq.mongodb.net/football_manager?retryWrites=true&w=majority"
const app = express();      //Activating Express Server
app.use(express.json())     //json Compaitable


//**********     Connecting to cloud mongodb database

mongoose.connect(process.env.MONGODB_URI || url , { useNewUrlParser: true, useUnifiedTopology: true })
const con = mongoose.connection
var isconnected = "disconnected..."
con.on('open', () => {
    console.log("Mongodb Atlas connected...")
    isconnected = "connected..."
})
const port = process.env.PORT || 9000
const host ='0.0.0.0'
app.listen(port,host, () =>{
    console.log("Server running...on port: "+port)
})

//*****  Middleware || CORS Policy 
//app.use(cors()) //Open to All

app.use(cors({
    origin: 'http://localhost:4200'
  }));


//***  Home Screen
app.get('/', (req,res) =>{
    res.send("OFM-Server ->  running ... " + "  Database -> "+isconnected + "   on port: "+ port )
})

// ***** Routes
const playerRouter = require('./routes/players')
app.use('/players',playerRouter)
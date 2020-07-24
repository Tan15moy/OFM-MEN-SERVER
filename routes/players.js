const express = require('express')
const router = express.Router()
const player = require('../models/player')

router.get('/', async(req,res) =>{

    try{

        const playerdata = await player.find()
        res.json(playerdata)

    }catch(err){
        res.send("Error : "+err)
    }
})

router.get('/:name', async(req,res) =>{

    try{

        const name = req.params.name
        const playerdata = await player.find({"Name":name})
        res.json(playerdata)

    }catch(err){
        res.send("Error : "+err)
    }
})

/*
router.post('/' , async(req,res) =>{

    const player1 = new player({
        name :   req.body.name ,
        country: req.body.country
    })
    try{
    const p1 = await player1.save()
    res.json(p1)

}catch(err){
    res.send("Error :" + err)
}
})
*/


module.exports = router
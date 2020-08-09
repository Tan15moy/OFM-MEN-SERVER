const express = require('express')
const mongodb = require('mongodb')
const router = express.Router()

const player = require('../models/player')


router.get('/', async(req,res) =>{
    const player_Detail = await player.find()
    res.json(player_Detail)
})


router.get('/search_by_name/:name', async(req,res) =>{
    const name = req.params.name
    player.find({"Name":name},(err,result) =>{
        if(err)     res.send(err)
        else        res.json(result)
    })
})


router.get('/search_by_id/:id', async(req,res) =>{
    const id = req.params.id
    player.findById(id,(err,result) =>{
        if(err)     res.send(err)
        else        res.json(result)
    })    
})


module.exports = router
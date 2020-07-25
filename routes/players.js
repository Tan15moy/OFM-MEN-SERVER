const express = require('express')
const router = express.Router()
const player = require('../models/player')


router.get('/', async(req,res) =>{
    const player_Detail = await player.find()
    res.json(player_Detail)
})

router.get('/:name', async(req,res) =>{
    const name = req.params.name
    const player_Detail = await player.find({"Name":name})
    res.json(player_Detail)
})


module.exports = router
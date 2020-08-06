const mongoose = require('mongoose')

const player_schema = new mongoose.Schema({  }, { collection : 'player list' }); 

module.exports = mongoose.model('player',player_schema)
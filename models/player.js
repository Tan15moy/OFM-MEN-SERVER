const mongoose = require('mongoose')

const player_schema = new mongoose.Schema({  }, { collection : 'football_manager' }); 

module.exports = mongoose.model('player',player_schema)
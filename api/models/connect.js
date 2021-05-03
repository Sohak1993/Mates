const mongoose = require('mongoose')

module.exports = mongoose.connect('mongodb://root:pwd@localhost:27017/mates', {useNewUrlParser: true, useUnifiedTopology: true})
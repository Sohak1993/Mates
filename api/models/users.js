const mongoose = require('mongoose')
const db = require('./connect')

const schema = mongoose.Schema
const userSchema = schema({
    name: String,
    firstname: String,
    nickname: String,
    birthdate: Date,
    email: String,
    password: String,
    teams: Array,
    games: Array,
    friends: Array 
})
const User = mongoose.model('users', userSchema) //modele mongoose

exports.getAll = () => {
    return db.then(() => {
        return User.find({}, (err, documents) => {
            documents
        })
    }).catch( err => {
        console.log("erreur conn db" + err)
    })
}


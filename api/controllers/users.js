const userModel = require('./../models/users')

exports.getAll = (req, res) => {
    
    userModel.getAll().then((dataUser) => {
        console.log(dataUser)       
    })    
    res.end()
}
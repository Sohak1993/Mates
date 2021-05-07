const userModel = require('./../models/users')

exports.login = (req, res) => {
    
    userModel.login(req.body).then((dataUser) => {

        res.send(dataUser)
    })
}
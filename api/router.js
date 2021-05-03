const express = require("express")
const router = express.Router()

const usersController = require('./controllers/users')

router.get('/api/getAll', usersController.getAll)

module.exports = router
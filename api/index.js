const express = require('express')
const app = express()
const cors = require('cors')
const bodyParser = require('body-parser')
const port = 4000
const router = require('./router')

exports.app = app
require('./config/session.config')

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended : true}))
app.use(cors({origin: 'http://localhost:3000'}))
app.use('/', router)


app.listen(port)

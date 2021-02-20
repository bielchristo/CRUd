const express = require('express')
const Router = express.Router()
const controller = require('../controllers/controller.js')

Router.post('/', controller.postNote, (req, res) => {
 res.status(200).cookie('id', 'value').json(res.locals.message)
})

module.exports = Router;
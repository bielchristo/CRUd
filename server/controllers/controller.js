const models = require('../models/models.js')


const controller = {}

controller.postNote = (req, res, next) => {
  const { message } = req.body
  models.Note.create({ message })
  .exec()
  .then(data => {
    res.locals.message = data;
    return next()
  })
  .catch((err) => next(err))
}

module.exports = controller;
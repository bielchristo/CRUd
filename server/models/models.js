const mongoose = require('mongoose');

const MONGO_URI = 'mongodb+srv://astaiglesia:OmegaSupreme@cluster0.rp1x2.mongodb.net/ohcrud?retryWrites=true&w=majority';

mongoose.connect(MONGO_URI, {
  // options for the connect method to parse the URI
  useNewUrlParser: true,
  useUnifiedTopology: true,
  // sets the name of the DB that our collections are part of
  dbName: 'ohcrud',
})
  .then(() => console.log('Connected to Mongo DB.'))
  .catch((err) => console.log(err));

const { Schema } = mongoose;

// : create a schema for '' and use it to create the model for it below
const schema = new Schema({
  note: { type: String, required: true },
});

const Note = mongoose.model('note', schema);

// exports all the models in an object to be used in the controller
module.exports = { Note };
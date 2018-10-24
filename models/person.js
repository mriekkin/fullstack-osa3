const mongoose = require('mongoose')

if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config()
}

const url = process.env.MONGODB_URL

mongoose.connect(url, { useNewUrlParser: true })

const personSchema = new mongoose.Schema({
  name: String,
  number: String
})

personSchema.statics.format = function(note) {
  return {
    name: note.name,
    number: note.number,
    id: note._id
  }
}

const Person = mongoose.model('Person', personSchema)

module.exports = Person
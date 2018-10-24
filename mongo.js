const mongoose = require('mongoose')

const url = '...insert url here...'

mongoose.connect(url, { useNewUrlParser: true })

const Person = mongoose.model('Person', {
  name: String,
  number: String
})

if (process.argv.length < 4) {
  // List all names in the phonebook
  Person
    .find({})
    .then(result => {
      console.log('puhelinluettelo:')
      result.forEach(person => {
        console.log(person.name + ' ' + person.number)
      })
      mongoose.connection.close()
    })
  return
}

// Add the specified person to the phonebook
const person = new Person({
  name: process.argv[2],
  number: process.argv[3]
})

person
  .save()
  .then(response => {
    console.log('lisätään henkilö ' + person.name + ' numero ' + person.number + ' luetteloon')
    mongoose.connection.close()
  })
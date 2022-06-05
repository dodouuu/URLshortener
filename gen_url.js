const outputLength = 5
const domainURL = 'http://localhost:3000/'

// define sample function to randomly return an item in an array
function sample(array) {
  const index = Math.floor(Math.random() * array.length)
  return array[index]
}

function genUrl() {
  const lowerCaseLetters = 'abcdefghijklmnopqrstuvwxyz'
  const upperCaseLetters = lowerCaseLetters.toUpperCase()
  const numbers = '1234567890'

  let collection = []
  collection = collection.concat([...lowerCaseLetters])
  collection = collection.concat([...upperCaseLetters])
  collection = collection.concat([...numbers])
  // console.log('collection', collection)

  // start generating URL
  let password = ''
  for (let i = 0; i < outputLength; i++) {
    password += sample(collection)
  }
  // console.log('password', password)
  return domainURL + password
}

// genUrl()

// export genUrl function for other files to use
module.exports = genUrl
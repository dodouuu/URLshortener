const mongoose = require('mongoose')
const Schema = mongoose.Schema

const urlShortenSchema = new Schema({
  urlBeforeShorten: { type: String, required: true },
  urlAfterShorten: { type: String, required: false }
})

module.exports = mongoose.model('urlShorten', urlShortenSchema)

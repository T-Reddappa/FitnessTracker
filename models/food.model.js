const mongoose = require('mongoose')

const foodSchema = new mongoose.Schema({
  name: String,
  calories: Number,
  protein: Number,
  fat: Number,
  carbs: Number
})

const Food = mongoose.model('Food', foodSchema)

module.exports = Food
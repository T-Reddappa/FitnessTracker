// Allow users to add exercises with details such as:
// Exercise Name
// Duration (in minutes)
// Calories Burned (auto-calculated based on exercise type)

const mongoose = require('mongoose')

const exerciseSchema = new mongoose.Schema({
  name: String,
  duration: Number,
  caloriesBurned: Number
})

const Exercise = mongoose.model('Exercise', exerciseSchema)

module.exports = Exercise
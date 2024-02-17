const mongoose = require('mongoose')

const goalSchema = new mongoose.Schema({
  name: String,
  description: String,
  targetDate: Date,
  targetCalories: Number,
  status: String
})

const Goal = mongoose.model('Goal', goalSchema)
module.exports = Goal
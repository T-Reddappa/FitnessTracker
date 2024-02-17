const mongoose = require('mongoose')
const { MongoClient } = require('mongodb')
const express = require('express')
const app = express()
const cors = require('cors')


app.use(express.json())
app.use(cors())
require('./db.js')

const Exercise = require('./models/exercise.model.js')
const Food = require('./models/food.model.js')
const Goal = require('./models/goal.model.js')


app.get('/', (req, res) => {
  res.send('Fitness Tacker Application Routes')
})


app.get('/exercises', async (req, res) => {
  try {
    const exercises = await Exercise.find({})
    res.status(200).json(exercises)
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
})

app.post('/exercises', async (req, res) => {
  try {
    const exercise = new Exercise(req.body)
    await exercise.save()
    res.status(201).json(exercise)
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
})


app.delete(
  '/exercises/:exerciseId',
  async (req, res) => {
    try {
      const exercise = await Exercise.findByIdAndDelete(req.params.exerciseId)
      if (exercise) {
        res.status(200).json(exercise)
      }
    } catch (error) {
      res.json(500).json({ error: error.message })
    }
  })

//food 
app.post('/food', async (req, res) => {
  try {
    const food = new Food(req.body)
    await food.save()
    res.status(201).json(food)
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
})

app.get('/food', async (req, res) => {
  try {
    const foods = await Food.find({})
    res.status(200).json(foods)
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
})

app.delete('/food/:foodId', async (req, res) => {
  try {
    const food = await Food.findByIdAndDelete(req.params.foodId)
    if (food) {
      res.status(200).json(food)
    }
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
})

//goals
app.post(
  '/goals',
  async (req, res) => {
    try {
      const goal = new Goal(req.body)
      await goal.save()
      res.status(201).json(goal)
    } catch (error) {
      res.status(500).json({ error: error.message })
    }
  })

app.get('/goals', async (req, res) => {
  try {
    const goals = await Goal.find({})
    res.status(200).json(goals)
  } catch (error) {
    res.status(500).json({ erro: error.message })
  }
})

app.delete('/goals/:goalId', async (req, res) => {
  try {
    const goal = await Goal.findByIdAndDelete(req.params.goalId)
    if (goal) {
      res.status(200).json(goal)
    }
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
})



const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`)
})
const express = require('express')
const mongoose = require('mongoose')
const userRouter = require('./routes/user.jsx')
const cors = require('cors')
require('dotenv').config()

const app = express()
app.use(express.json())

//Cors
app.use(
  cors({
    origin: '*',
  })
)

//middleware
app.use((req, res, next) => {
  console.log(req.path, req.method)
  next()
})

//routes
app.use('/api/user', userRouter)

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    app.listen(process.env.PORT, () => {
      console.log('Listening on port 5000')
    })
  })
  .catch((error) => {
    console.log(error)
  })

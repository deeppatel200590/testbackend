require ('dotenv').config()
const express = require('express')//below line same as this line
// import express from 'express'
const app = express()
const port = 3000

// localhost:3000 run this on the webpage and see result also we can run 'num run start' in terminal
app.get('/', (req, res) => {
  res.send('Hello World!')
})

//localhost:3000/hi run this and see result
app.get('/hi', (req, res) => {
  res.send('Hi!')
})

//If we write a new code and we save so one time we need to restart the server so run 'npm run start' one more time because update not happen so...
app.get('/login', (req, res) => {
  res.send('Hi from deep!')
})

//this run 3000 because js overwrite the .env file
app.listen(process.env.PORT || port, () => {
  console.log(`Example app listening on port ${process.env.PORT || port}`)
})

// CONFIGURATION
require('dotenv').config()
const express = require('express')
const app = express()
const router = require("./controllers/breads_controller")
const methodOverride = require('method-override')
const mongoose = require('mongoose')



// MIDDLEWARE
app.use(express.static('public'))
app.use(express.urlencoded({extended: true}))
app.use(methodOverride('_method'))
app.set('views', __dirname + '/views')
app.set('view engine', 'jsx')
app.engine('jsx', require('express-react-views').createEngine())





// ROUTES
app.get('/', (req, res) => {
  res.send('Welcome to an Awesome App about Breads')
})

// Breads
const breadsController = require('./controllers/breads_controller.js')
app.use('/breads', breadsController)

  

// 404 Page
app.get('*', (req, res) => {
  res.send('404')
})


mongoose.connect(process.env.MONGO_URI, {useNewUrlParser: true, useUnifiedTopology: true}, 
  () => { console.log('connected to mongo: ', process.env.MONGO_URI) }
)



app.listen(process.env.PORT)


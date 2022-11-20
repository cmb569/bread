// DEPENDENCIES
const express = require('express')

// DEPENDENCIES
const methodOverride = require('method-override')


// MIDDLEWARE
app.use(express.static('public'))


// MIDDLEWARE
app.use(express.urlencoded({extended: true}))

// MIDDLEWARE
app.use(express.static('public'))

// MIDDLEWARE
app.use(methodOverride('_method'))



// MIDDLEWARE
app.set('views', __dirname + '/views')
app.set('view engine', 'jsx')
app.engine('jsx', require('express-react-views').createEngine())


// CONFIGURATION
require('dotenv').config()
const PORT = process.env.PORT
const app = express()

// ROUTES
app.get('/', (req, res) => {
  res.send('Welcome to an Awesome App about Breads!')
})

// ROUTES
app.get('/', (req, res) => {
    res.send('Welcome to an Awesome App about Breads')
  })
  
  // Breads
  const breadsController = require('./controllers/breads_controller.js')
  app.use('/breads', breadsController)
  

// LISTEN
app.listen(PORT, () => {
  console.log('listening on port', PORT);
})


// 404 Page
app.get('*', (req, res) => {
  res.send('404')
})


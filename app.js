const express = require('express')
const expressLayouts = require('express-ejs-layouts')

const app = express()

app.use(express.static(__dirname + '/public'))
// creates an absolute path pointing to a folder called "views"
app.set('views', __dirname + '/views')
app.set('view engine', 'ejs')
app.use(expressLayouts)

app.get('/', (request, response) => {
  const user = { name: 'Josh', dog: 'Ragnar' }
  /* { user } === { user: user } */
  response.render('index', { user })
})

app.get('/aboutus', (request, response) => {
  response.render('about')
})

app.get('/contactus', (request, response) => {
  response.render('contact')
})

app.listen(3000, () => console.log('Running on http://localhost:3000'))

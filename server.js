const express = require('express');
const app = express()

const homeController = require('./controllers/homeController');
const loginController = require('./controllers/loginController');
const registerController = require('./controllers/registerController');
const users = []

app.set('view-engine', 'ejs')
app.use(express.urlencoded({ extended: false }))

app.get('/', homeController.homePage)

app.get('/login', loginController.loginPage)

app.get('/register', registerController.registerPage)
app.post('/register', registerController.registerUser)

app.listen(3000)

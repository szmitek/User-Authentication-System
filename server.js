const express = require('express');
const app = express()
const session = require('express-session');

const homeController = require('./controllers/homeController');
const loginController = require('./controllers/loginController');
const registerController = require('./controllers/registerController');
const dashboardController = require('./controllers/dashboardController')

app.set('view-engine', 'ejs')
app.use(express.urlencoded({ extended: false }))
// configure the express-session middleware
app.use(session({
    secret: 'my-secret-key', // use a secret key to encrypt the session data
    resave: false,
    saveUninitialized: false
}));

app.get('/', homeController.homePage)
app.get('/dashboard', dashboardController.dashboardPage)

app.get('/login', loginController.loginPage)
app.post('/login', loginController.loginUser)

app.get('/register', registerController.registerPage)
app.post('/register', registerController.registerUser)

app.listen(3000)

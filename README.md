# User Authentication System
This is a simple user authentication app that allows users to register, login, reset/update their password.

## Prerequisites
* Node.js and npm
* MongoDB
## Installing
1. Clone the repository
2. Install the dependencies by running npm install
3. Create a .env file and set the following environment variables:
* MONGODB_URI: the URI of your MongoDB database
* SESSION_SECRET: a secret string to encrypt the session data
4. Start the server by running npm start
## Using the app
1. Navigate to http://localhost:3000/login in your web browser
2. Click on the Register link to create a new account
3. Fill in the form with your name, email, password, and confirm password, and click on the Register button
4. If the registration was successful, you will be redirected to the login page
5. Enter your email and password and click on the Login button
6. If the login was successful, you will be redirected to the dashboard page
7. To reset your password, click on the Forgot Password link on the login page, enter your email and click on the Send Email button
8. Check your email for a reset password link, click on the link and enter your new password and confirm password
9. Click on the Update Password button to update your password
10. To log out, click on the Logout button on the dashboard page
## Built with
* Express - web framework for Node.js
* Mongoose - object modeling for MongoDB
* EJS - template engine
* express-session - session middleware for Express
* bcrypt - library for hashing and salting passwords
* nodemailer - library for sending emails

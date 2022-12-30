const bcrypt = require("bcrypt");
const users = require("../data/users");


exports.loginPage = (req, res) => {
    res.render('login.ejs')
}

exports.loginUser = (req, res) => {
    // retrieve the email and password from the request body
    const { email, password } = req.body;

    // check if a user with the provided email exists in the users array
    const user = users.find(user => user.email === email);

    // if the user exists, check if the provided password matches the hashed password
    if (user) {
        // use bcrypt to compare the provided password with the hashed password
        bcrypt.compare(password, user.password, (error, result) => {
            if (error) {
                // an error occurred while comparing the passwords, return an error response
                res.status(500).send({ error: 'Error logging in' });
            } else if (result) {
                // the password matches, log the user in and redirect to the dashboard
                req.session.user = user;
                res.redirect('/dashboard');
            } else {
                // the password does not match, return an error response
                res.status(401).send({ error: 'Incorrect email or password' });
            }
        });
    } else {
        // no user was found with the provided email, return an error response
        res.status(401).send({ error: 'Incorrect email or password' });
    }
};

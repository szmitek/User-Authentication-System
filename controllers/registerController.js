const users = require("../server")
const bcrypt = require('bcrypt')
const crypto = require('crypto')

exports.registerPage = (req, res) => {
    res.render('register.ejs')
}

exports.registerUser = async (req, res) => {
    // Validate the user's input
    if (!req.body.name || !req.body.email || !req.body.password || !req.body.confirm_password) {
        // If any of the required fields are missing, return an error
        return res.status(400).send({ error: 'Name, email, password, and confirm password are required' });
    }
    if (!/^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/.test(req.body.email)) {
        // If the email is not in a valid format, return an error
        return res.status(400).send({ error: 'Invalid email' });
    }
    if (req.body.password !== req.body.confirm_password) {
        // If the passwords don't match, return an error
        return res.status(400).send({ error: 'Passwords do not match' });
    }

    // Check if a user with the same email already exists
    const existingUser = users.find((user) => user.email === req.body.email);
    if (existingUser) {
        // If a user with the same email already exists, return an error
        return res.status(400).send({ error: 'A user with this email already exists' });
    }

    try {
        // Generate a unique salt for the new user
        const salt = crypto.randomBytes(16).toString('hex');
        // Hash the user's password with the unique salt
        const hashedPassword = await bcrypt.hash(req.body.password, salt);
        // Add the new user to the in-memory array
        users.push({
            id: Date.now().toString(),
            name: req.body.name,
            email: req.body.email,
            password: hashedPassword,
            salt,
            loginAttempts: 0,
            lockUntil: 0,
        });
        // Redirect the user to the login page
        res.redirect('/login');
    } catch (error) {
        // If there was an error saving the user, return an error
        res.status(500).send({ error: 'Error saving user' });
    }
};

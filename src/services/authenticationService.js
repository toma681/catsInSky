const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const authenticationDB = require('../db/authenticationDB');
const saltRounds = 10;

const signup = async (username, password) => {
    bcrypt.hash(password, saltRounds, (err, hash) => {
        authenticationDB.signup(username, hash);
    });
    return "lit";
}

const signin = async (username, password) => {
    let hashedPassword = await authenticationDB.retrieveHashedPassword(username);
    let match = await bcrypt.compare(password, hashedPassword);

    if (match) {
        return jwt.sign({ username }, process.env.SECRET, { expiresIn: '1h' });
    }
}

module.exports = {
    signup,
    signin,
}
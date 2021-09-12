const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const authenticationDB = require('../db/authenticationDB');
const saltRounds = 10;

const signup = async (username, password) => {
    let hash = await bcrypt.hash(password, saltRounds);
    let newUser = await authenticationDB.signup(username, hash);

    return newUser;
}

const signin = async (username, password) => {
    let hashedPassword = await authenticationDB.retrieveHashedPassword(username);
    let match = await bcrypt.compare(password, hashedPassword);

    if (match) {
        return jwt.sign({ username }, process.env.SECRET, { expiresIn: '1h' });
    }

    throw new Error("Signin failed, credentials did not match");
}

module.exports = {
    signup,
    signin,
}
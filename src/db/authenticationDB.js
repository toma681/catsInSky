const e = require('express');
const User = require('../models/user');

const signup = async (username, password) => {
    let userExists = await User.exists({username});
    if (!userExists) {
        let newUser = new User({ username, password });
        newUser.save();
        return newUser.username;
    } 
}

const retrieveHashedPassword = async (username) => {
    let foundUser = await User.findOne({username});
    return foundUser.password;
}

module.exports = {
    signup,
    retrieveHashedPassword
}
const User = require('../models/user');

const createNewUser = async (username, password) => {
    let userExists = await User.exists({ username });
    if (!userExists) {
        let newUser = new User({ username, password });
        newUser.save();

        return newUser.username;
    }
    throw new Error("User already exists");
}

const retrieveHashedPassword = async (username) => {
    let foundUser = await User.findOne({ username });
    return foundUser.password;
}

module.exports = {
    createNewUser,
    retrieveHashedPassword
}
const User = require('../models/User');

const signup = async (username, password) => {
    let userExists = await User.exists({username});
    if (!userExists) {
        let newUser = new User({ username, password });
        newUser.save();
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
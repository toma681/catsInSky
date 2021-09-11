const User = require('../models/User');

const signup = async (username, password) => {
    let newUser = new User({ username, password });
    newUser.save();
}


const signin = async () => {
    let cats = await Cat.find({}, 'name veges');
    return cats;
}



module.exports = {
    signin,
    signup,
}
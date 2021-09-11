const authenticationDB = require('../db/authenticationDB');
const bcrypt = require('bcrypt');
const saltRounds = 10;

const signup = async (username, password) => {
    bcrypt.hash(password, saltRounds, (err, hash) => {
        await authenticationDB.signup(username, hash);
    })
    return "lit";
}

const signin = async () => {
    let cats = await authenticationDB.retrieve();

    let recipeFormat = {};

    for (let i = 0; i < cats.length; i++) {
        let curCat = cats[i];
        let name = curCat.name;
        recipeFormat[name] = curCat.veges;
    }
    return recipeFormat;
}

module.exports = {
    signup,
    signin,
}
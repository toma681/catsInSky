const authenticationDB = require('../db/authenticationDB');

const signup = async (catName) => {
    return await authenticationDB.post(catName);
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
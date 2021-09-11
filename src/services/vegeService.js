const vegeDB = require('../db/vegeDB');

const post = async (vegeName) => {
    return await vegeDB.post(vegeName);
}

const remove = async (vegeName) => {
    return await vegeDB.remove(vegeName);
}

module.exports = {
    post,
    remove
}
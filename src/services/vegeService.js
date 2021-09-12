const vegeDB = require('../db/vegeDB');

const post = async (vegeName) => {
    await vegeDB.post(vegeName);
}

const remove = async (vegeName) => {
    await vegeDB.remove(vegeName);
}

module.exports = {
    post,
    remove
}
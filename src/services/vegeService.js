const { postVege, delVege  } = require('../db/vegeDB');

const insertVege = async (vegeName) => {
    return await postVege(vegeName);
}

const hideOrDeleteVege = async (vegeName) => {
    return await delVege(vegeName);
}

module.exports = {
    insertVege,
    hideOrDeleteVege
}
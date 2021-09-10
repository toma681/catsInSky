const dbConnect = require('../utils/dbConnect');
const CatList = require('../models/cat');
const Shark = require('../models/cat');

const recipeDB = async () => {

    var newShark = new Shark({ name: "DSD" });
    newShark.save(function (err) {
        if (err) {
            console.log("33");
            console.log(err);
        } else {
            console.log("POG");
        }
    });
    return {
        "Alex": ["Artichoke", "Asparagus"],
        "Abhi": ["Artichoke", "Asparagus"],
        "Samarth": ["Squash"],
    }
}

const postCat = () => {
    return "pogCat";
}

const postVege = () => {
    return "pogVege";
}

const delVege = () => {
    return "pogDelVege";
}

module.exports = {
    recipeDB,
    postCat,
    postVege,
    delVege
}
const Cat = require('../models/cat');
const Vege = require('../models/vege');

const retrieveRecipes = async () => {
    let cats = await Cat.find({});
    return cats;
}

const addCatToDB = async (name) => {
    let catExists = await Cat.exists({ name });
    if (!catExists) {
        let newCat = new Cat({ name, veges: [], firstChar: name[0].toLowerCase() });

        let vegeList = await Vege.find({ firstChar: newCat.firstChar, deleted: false })

        for (let i = 0; i < vegeList.length; i++) {
            let curVege = vegeList[i];

            newCat.veges.push(curVege.name);
            curVege.cats.push(newCat.name);
            curVege.save();
        }

        newCat.save();
    } else {
        throw new Error("Cat already exists");
    }
}

const removeCatFromDB = async (name) => {
    let foundCat = await Cat.findOne({ name });

    if (foundCat) {
        let vegeList = foundCat.veges;
        for (let i = 0; i < vegeList.length; i++) {
            let curVege = await Vege.findOne({ name: vegeList[i] });
            let catIndex = curVege.cats.indexOf(name);
            curVege.cats.splice(catIndex, 1);
            curVege.save();
        }

        foundCat.delete();
    } else {
        throw new Error("Cat does not exist");
    }
}

module.exports = {
    retrieveRecipes,
    addCatToDB,
    removeCatFromDB
}
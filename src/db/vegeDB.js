const Cat = require('../models/cat');
const Vege = require('../models/vege');

const addVegeToDB = async (name) => {
    let vegeExists = await Vege.exists({ name });
    if (!vegeExists) {
        let newVege = new Vege({ name, firstChar: name[0].toLowerCase(), deleted: false });
    
        let catsToUpdate = await Cat.find({ firstChar: newVege.firstChar });

        for (let i = 0; i < catsToUpdate.length; i++) {
            let curCat = catsToUpdate[i];

            curCat.veges.push(newVege.name);
            curCat.save();

            newVege.cats.push(curCat.name);
        }

        newVege.save()

    } else {
        throw new Error("Vege already exists");
    }
}

const flagOrRemoveVege = async (name) => {
    let foundVege = await Vege.findOne({ name });
    if (foundVege) {
        let catList = foundVege.cats;

        if (!foundVege.deleted) {
            foundVege.deleted = true;
            for (let i = 0; i < catList.length; i++) {
                let curCat = await Cat.findOne({name: catList[i]});
                let indexOfVege = curCat.veges.indexOf(name);
                curCat.veges.splice(indexOfVege, 1);
                curCat.save();
            }
            foundVege.cats = [];
            foundVege.save();
        } else {
            foundVege.delete();
        }

    } else {
        throw new Error("Vege does not exist");
    }
}

module.exports = {
    addVegeToDB,
    flagOrRemoveVege
}
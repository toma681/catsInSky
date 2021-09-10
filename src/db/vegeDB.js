const Cat = require('../models/cat');
const Vege = require('../models/vege');

const postVege = async (name) => {
    let vegeExists = await Vege.exists({ name });
    if (!vegeExists) {
        let newVege = new Vege({ name, firstChar: name[0].toLowerCase() });
    
        let catsToUpdate = await Cat.find({ firstChar: newVege.firstChar });

        for (let i = 0; i < catsToUpdate.length; i++) {
            let curCat = catsToUpdate[i];

            curCat.veges.push(newVege.name);
            curCat.save();

            newVege.cats.push(curCat.name);
        }

        newVege.save()

    } 

    return "pogVege";
}

const delVege = async (name) => {
    let foundVege = await Vege.findOne({ name });
    if (foundVege) {
        let catList = foundVege.cats;

        if (catList.length > 0) {
            for (let i = 0; i < catList.length; i++) {
                let curCat = await Cat.findOne({name: catList[i]});
                let indexOfVege = curCat.veges.indexOf(name);
                curCat.veges.splice(indexOfVege);
                curCat.save();
                let indexOfCat = catList.indexOf(curCat.name);
                foundVege.cats.splice(indexOfCat);
            }
            foundVege.save();
        } else {
            foundVege.delete();
        }

    } 
    return "pogDelVege";
}

module.exports = {
    postVege,
    delVege
}
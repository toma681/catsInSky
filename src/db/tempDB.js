const Cat = require('../models/cat');
const Vege = require('../models/vege');

const catDB = async () => {
    let cats = await Cat.find({}, 'name veges');
    return cats;
}

const postCat = async (name) => {

    let catExists = await Cat.exists({ name });
    if (!catExists) {
        let newCat = new Cat({ name, veges: [], firstChar: name[0].toLowerCase() });
        await newCat.save(err => {
            if (err) {
                console.log(err);
            } else {
                console.log("POG");
            }
        })
    } else {
        return null;
    }

    return "pogCat";
}

const postVege = async (name) => {
    // First, add vege to vegeList
    // Then, add it to cats

    let vegeExists = await Vege.exists({ name });
    if (!vegeExists) {
        let newVege = new Vege({ name, firstChar: name[0].toLowerCase() });
        await newVege.save(err => {
            if (err) {
                console.log(err);
            } else {
                console.log("POG");
            }
        })

        let catsToUpdate = await Cat.find({firstChar: newVege.firstChar});

        for (let i = 0; i < catsToUpdate.length; i++) {
            let curCat = catsToUpdate[i];

            curCat.veges.push(newVege.name);
            curCat.save();
        }


    } else {
        return null;
    }

    return "pogVege";
}

const delVege = () => {
    return "pogDelVege";
}

module.exports = {
    catDB,
    postCat,
    postVege,
    delVege
}
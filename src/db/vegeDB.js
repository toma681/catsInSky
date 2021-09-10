const Cat = require('../models/cat');
const Vege = require('../models/vege');

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

        let catsToUpdate = await Cat.find({ firstChar: newVege.firstChar });

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
    postVege,
    delVege
}
// Fake DB For Now, Later implement Mongo and Mongoose

const recipeDB = () => {
    return {
        "Alex": ["Artichoke", "Asparagus"],
        "Abhi": ["Artichoke", "Asparagus"],
        "Samarth": ["Squash"],
      }
}

const postCat = () => {

}

const postVege = () => {

}

const delVege = () => {

}

module.exports = {
    recipeDB,
    postCat,
    postVege,
    delVege
}
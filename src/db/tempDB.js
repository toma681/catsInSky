// Fake DB For Now, Later implement Mongo and Mongoose

const recipeDB = () => {
    return {
        "Alex": ["Artichoke", "Asparagus"],
        "Abhi": ["Artichoke", "Asparagus"],
        "Samarth": ["Squash"],
      }
}

module.exports = {
    recipeDB,
}
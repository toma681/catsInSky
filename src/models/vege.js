const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const vegeSchema = new Schema({
    name: { type: String, required: true },
    firstChar: {type: String, required: true}
});

module.exports = mongoose.model('Vege', vegeSchema)
const mongoose = require('mongoose');

const url = "mongodb+srv://Andrew:Pokemon628^@cluster0.fvikk.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";

mongoose.connect(url, {useNewUrlParser: true});
const authenticationService = require('../services/authenticationService');

const signup = async (req, res) => {
    try {
        ({ username, password } = req.body);
        await authenticationService.signup(username, password);
    } catch (e) {
        console.log(e.message);
        res.sendStatus(500);
    }
}

const signin = async (req, res) => {
    try {
        let cats = await authenticationService.signin(catName);
        res.send(cats);
    } catch (e) {
        console.log(e.message);
        res.sendStatus(500);
    }
}

module.exports = {
    signup,
    signin,
}

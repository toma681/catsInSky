const authenticationService = require('../services/authenticationService');

const signup = async (req, res) => {
    try {
        ({ username, password } = req.body);
        await authenticationService.signup(username, password);
        res.send("lit");
    } catch (e) {
        console.log(e.message);
        res.sendStatus(500);
    }
}

const signin = async (req, res) => {
    try {
        ({ username, password } = req.body);
        let accessToken = await authenticationService.signin(username, password);
        res.send(accessToken);
    } catch (e) {
        console.log(e.message);
        res.sendStatus(500);
    }
}

module.exports = {
    signup,
    signin,
}

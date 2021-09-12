const authenticationService = require('../services/authenticationService');

const signup = async (req, res) => {
    try {
        ({ username, password } = req.body);
        let newUser = await authenticationService.signup(username, password);

        res.send(`Signup for user ${newUser} Successful!`);
    } catch (e) {
        console.log(e.message);
        res.status(500).send(e.message);
    }
}

const signin = async (req, res) => {
    try {
        ({ username, password } = req.body);
        let accessToken = await authenticationService.signin(username, password);

        res.send({ accessToken });
    } catch (e) {
        console.log(e.message);
        res.status(403).send(e.message);
    }
}

module.exports = {
    signup,
    signin,
}
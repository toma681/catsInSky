const authenticationService = require('../services/authenticationService');

const signup = async (req, res) => {
    try {
        ({ username, password } = req.body);
        let signupStatus = await authenticationService.signup(username, password);
        if (!signupStatus) {
            throw new Error("Signup Failed!");
        }
        res.send("Signup Successful!");
    } catch (e) {
        console.log(e.message);
        res.status(500).send(e.message);
    }
}

const signin = async (req, res) => {
    try {
        ({ username, password } = req.body);
        let accessToken = await authenticationService.signin(username, password);
        if (!accessToken) {
            throw new Error("Signin Failed!");
        }
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

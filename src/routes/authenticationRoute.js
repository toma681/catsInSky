
const express = require("express");
const router = express.Router();

const authenticationController = require('../controllers/authenticationController');

router.post('/signup', authenticationController.signup);
router.post('/signin', authenticationController.signin);

module.exports = router;
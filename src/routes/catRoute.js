const express = require("express");
const router = express.Router();

const { postCat } = require('../controllers/catController');

router.post('/cat', postCat);

module.exports = router;
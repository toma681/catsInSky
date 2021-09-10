const express = require("express");
const router = express.Router();

const { createVege } = require('../controllers/vegeController');

router.post('/vege', createVege);
// router.delete('/vege')

module.exports = router;
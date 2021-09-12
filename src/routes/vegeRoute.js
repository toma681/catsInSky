const express = require("express");
const router = express.Router();

const vegeController = require('../controllers/vegeController');

router.post('/vege', vegeController.addVege);
router.delete('/vege', vegeController.removeVege)

module.exports = router;
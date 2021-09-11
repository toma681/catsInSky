const express = require("express");
const router = express.Router();

const vegeController = require('../controllers/vegeController');

router.post('/vege', vegeController.post);
router.delete('/vege', vegeController.remove)

module.exports = router;
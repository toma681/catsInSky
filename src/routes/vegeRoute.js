const express = require("express");
const router = express.Router();

const { createVege, deleteVege } = require('../controllers/vegeController');

router.post('/vege', createVege);
router.delete('/vege', deleteVege)

module.exports = router;
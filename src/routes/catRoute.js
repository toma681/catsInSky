const express = require("express");
const router = express.Router();

const catController = require('../controllers/catController');

router.get('/cats', catController.retrieve);
router.post('/cat', catController.post);
router.delete('/cat', catController.remove)

module.exports = router;
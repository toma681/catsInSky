const express = require("express");
const router = express.Router();

const catController = require('../controllers/catController');

router.get('/cats', catController.retrieveRecipes);
router.post('/cat', catController.addCat);
router.delete('/cat', catController.removeCat)

module.exports = router;
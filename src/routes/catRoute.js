const express = require("express");
const router = express.Router();

const { getCats, postCat } = require('../controllers/catController');

router.get('/cats', getCats);
router.post('/cat', postCat);

module.exports = router;
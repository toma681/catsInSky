const express = require("express");
const router = express.Router()

router.get('/', (req, res) => {
    res.send('dd')
})
// define the about route
router.get('/about', function (req, res) {
    res.send('About birds')
})

module.exports = router
const express = require('express');
const router = express.Router();
const ejs = require('ejs');

router.get('/doar', (req, res) => {
    res.render('doar');
});


module.exports = router;
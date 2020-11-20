const express = require('express');
const router = express.Router();
const ejs = require('ejs');

router.get('/contato', (req, res) => {
    res.render('contato')
})


module.exports = router;
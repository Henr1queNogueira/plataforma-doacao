const router = require('express').Router();
const paypal = require('paypal-rest-sdk');
const paypalConfig = require('../config/paypal.json');

paypal.configure(paypalConfig)

const {valores} = require("../config/valores.json");

router.get('/doar', (req, res) => {
    res.render('doar', {valores})
});

//rota quando o for doar
router.post('/doar', (req, res) => {
    res.send({ success: true})

});

router.get('/sucesso', (req, res) => {
    //quando a pessoa doar com sucesso
    res.send({success: true})
});

router.get('/cancelar', (req, res) => {
    //quando a pessoa quiser cancelar a doação
    res.send({success: true})
});

module.exports = router;

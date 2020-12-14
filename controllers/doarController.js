const express = require('express');
const router = express.Router();
const ejs = require('ejs');
const flash = require('express-flash');
const paypal = require('paypal-rest-sdk');

const { text } = require('body-parser');
const { default: validator } = require('validator');

router.get('/doar', (req, res) => {
    res.render('doar');
});

router.post('/doar', (req, res) => {
   /* var erros = [];

    var { nome, sobrenome, cpf, dataNascimento, email, contato, endereco1, endereco2, pais, estado, cidade } = req.body;
 
        /*Início da Validação do campos
        if(!nome || typeof nome == undefined || nome == null){
            erros.push({text: 'Nome inválido'});
        }

        if(!sobrenome || typeof sobrenome == undefined || sobrenome == null){
            erros.push({text: 'sobrenome inválido'});
        }

        if(!cpf || cpf == null){
            erros.push({text: 'CPF inválido'});
        }
        if(!dataNascimento || dataNascimento == null || dataNascimento == undefined) {
            erros.push({text: 'CPF inválido'});
        }
        if(!email || email == undefined){
            erros.push({text: 'E-mail inválido'})
        }

        if(erros.length > 0){
            res.render('doar', {erros, nome, email, cpf});
        } else{
            req.flash('msg_sucesso', 'Obrigado, Doação feita com sucesso!');
            //no caso, redirecionar para lista de usuários
            res.redirect('/doar')
        }

     /*Fim da Validação do campos*/

     /**Paypal - inicio*/

     var {cpf, email} = req.body;

     const doacao = {
        "intent": "sale",
        "payer": {
            "payment_method": "paypal"
        },
        "redirect_urls": {
            "return_url": `http://localhost:8000/finalizar?email=${email}`,
            "cancel_url": "http://cancel.url"
        },
        "transactions": [{
            "item_list": {
                "items": [{
                    "name": "Doacao",
                    "sku": "" + Date.now(), //id do valor
                    "price": "1.00",
                    "currency": "BRL",
                    "quantity": 1
                }]
            },
            "amount": {
                "currency": "BRL",
                "total": "1.00"
            },
            "description": "Doação no valor de R$1. Muito Obrigado!"
        }]
    };

    //criando pagamento
    paypal.payment.create(doacao, (error, payment) => {
        if(error){
            console.log(error);
        } else {
            for(var i = 0; i < payment.links.length; i++){
                var p = payment.links[i];
                if(p.rel === 'approval_url'){
                    res.redirect(p.href);
                }
            }
            //res.json(payment);
        }
    })
});

router.get('/finalizar', (req, res) => {
    var payerId = req.query.PayerID;
    var paymentId = req.query.paymentId;

    var clienteEmail = req.query.email;
    
    console.log(clienteEmail)
    
    const finalizar = {
        "payer_id": payerId,
        "transactions": [{
            "amount" : {
                "currency": "BRL",
                "total": "1.00"
            }
        }]
    }

    paypal.payment.execute(paymentId, finalizar, (error, payment) => {
        if(error){
            console.log(error);
        } else {
            //salvar dados de pagamento no banco de dados
    //Clientetabela.addDoacao(doacao);

            res.json(payment)
        }
    })
});

module.exports = router;
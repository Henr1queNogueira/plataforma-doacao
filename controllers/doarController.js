const express = require('express');
const router = express.Router();
const ejs = require('ejs');
const flash = require('express-flash');
const paypal = require('paypal-rest-sdk');
const pdf = require('html-pdf');
const Doacao = require('../models/Doar');

const { text } = require('body-parser');
const {valores} = require("../config/valores.json");

router.get('/doar', (req, res) => {
    res.render('doar', {valores});
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

     var {cpf, email, valor} = req.body;

     const doacao = {
        "intent": "sale",
        "payer": {
            "payment_method": "paypal"
        },
        "redirect_urls": {
            "return_url": `http://localhost:8000/finalizar?email=${email}&valor=${valor}`,
            "cancel_url": "http://cancel.url"
        },
        "transactions": [{
            "item_list": {
                "items": [{
                    "name": "Doacao",
                    "sku": "121_doacao", //id do valor
                    "price": valor,
                    "currency": "BRL",
                    "quantity": 1
                }]
            },
            "amount": {
                "currency": "BRL",
                "total": valor
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

                    var { nome, sobrenome, cpf, dataNascimento, email, contato, endereco1, pais, estado, cidade, valor } = req.body;
                    Doacao.create({
                        nome: nome, 
                        sobrenome: sobrenome,
                        cpf: cpf,
                        dataNascimento: dataNascimento,
                        email: email,
                        contato: contato,
                        endereco1: endereco1,
                        cidade: cidade,
                        estado: estado,
                        pais: pais,
                        valor: valor
            
                        }).then(() => {
                            //req.flash('msg_sucesso', 'Usuário criado com sucesso!');
                            console.log('tabela criada')
                            
                        }).catch(()=> {
                            console.log(`Deu erro ${error}`)
                            
                        });
                }
            }
            var { nome, sobrenome, cpf, dataNascimento, email, contato, endereco1, pais, estado, cidade, valor } = req.body;

            //Criar pdf (comprovante de doação)
                const comprovanteDoacao = `
                <h1> Comprovante de Doação</h1> <hr>
                <p> A Casa de Apoio - Filhos de Hiram, entidade sem fins lucrativos, 
                inscrita no CNPJ sob o nº(informar), com sede à (endereço da casa), declara ter recebido de 
                ${nome} ${sobrenome}, inscrito(a) no CPF sob o nº ${cpf}, em DOAÇÂO a importância de R$ ${valor}, 
                declarando ainda que os recursos aplicados integralmente na 
                construção da casa de apoio para atender pacientes do Hospital do Amor.</p>
                `
                pdf.create(comprovanteDoacao, {'format': 'A4'}).toFile('./meupdf2.pdf', function(err, res){
                    if(err){
                        console.log(err)
                    } else{
                        console.log(res);
                    }
                  });  
                  
                  
            //res.json(payment);
        }
    })
});

router.get('/finalizar', (req, res) => {
    var payerId = req.query.PayerID;
    var paymentId = req.query.paymentId;
    var valor = req.query.valor;

    var clienteEmail = req.query.email;
    
    //console.log(clienteEmail)
    
    const finalizar = {
        "payer_id": payerId,
        "transactions": [{
            "amount" : {
                "currency": "BRL",
                "total": valor
            }
        }]
    }

    paypal.payment.execute(paymentId, finalizar, (error, payment) => {
        if(error){
            console.log(error);
        } else {

            res.json(payment)
        }
    })
});

module.exports = router;
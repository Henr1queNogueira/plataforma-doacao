const express = require('express');
const router = express.Router();
const ejs = require('ejs');
const { msg } = require('body-parser');

router.get('/doar', (req, res) => {
    res.render('doar');
});

router.post('/doar', (req, res) => {
    var erros = [];
     
    var nome = req.body.nome;
    var sobrenome = req.body.sobrenome;
    var cpf = req.body.cpf;
    var email = req.body.email;
    var dataNascimento = req.body.dataNascimento;
    var endereco = req.body.endereco;
   

        /*Início da Validação do campos*/
        if(!nome || typeof nome == undefined || nome == null){
            erros.push({msg: 'Nome inválido'});
        }

        if(!sobrenome || typeof sobrenome == undefined || sobrenome == null){
            erros.push({msg: 'Sobrenome inválido'});
        }

        if(!cpf || cpf == null){
            erros.push({msg: 'CPF inválido'});

        }

        if(!email || typeof email == undefined || email == null){
            erros.push({msg: 'E-mail inválido'});
        }

        if(!dataNascimento || typeof dataNascimento == undefined || dataNascimento == null){
            erros.push({msg: 'Data de Nascimento inválida'});
        }

        
        /* Fim de validação dos campos do formulario */

        if(erros.length > 0){
            res.render('doar', {erros, nome, email, dataNascimento});
        }
});


module.exports = router;
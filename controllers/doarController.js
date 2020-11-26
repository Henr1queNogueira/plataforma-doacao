const express = require('express');
const router = express.Router();
const ejs = require('ejs');
const { msg } = require('body-parser');
const { default: validator } = require('validator');

router.get('/doar', (req, res) => {
    res.render('doar');
});

router.post('/doar', (req, res) => {
    var erros = [];

    var {nome, sobrenome, cpf, email, dataNascimento, endereco} = req.body;
 
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
        if (validator.isEmail(email)) {
            erros.push({text: 'Isso não é um e-mail'})
        }

        if(!dataNascimento || typeof dataNascimento == undefined || dataNascimento == null){
            erros.push({msg: 'Data de Nascimento inválida'});
        }
        if(validator.isEmpty(endereco)){
            erros.push({text: 'Campo vazio'})
        }

        if(erros.length > 0){
            res.render('doar', {erros, nome, sobrenome, cpf, email, dataNascimento, endereco});
        }else{
            req.flash('msg_sucesso', 'Obrigado! Doação feita com sucesso!');
            //no caso, redirecionar para lista de usuários
            res.redirect('/doar')
        }
    
        /* Fim de validação dos campos do formulario */

        if(erros.length > 0){
            res.render('doar', {erros, nome, email, dataNascimento});
        }
});


module.exports = router;
const express = require('express');
const router = express.Router();
const ejs = require('ejs');
const flash = require('express-flash');
const { cpf } = require('cpf-cnpj-validator');

const { text } = require('body-parser');
const { default: validator } = require('validator');

router.get('/doar', (req, res) => {
    res.render('doar');
});

router.post('/doar', (req, res) => {
    var erros = [];

    var { nome, sobrenome, cpf, dataNascimento, email, contato, endereco1, endereco2, pais, estado, cidade } = req.body;
 
        /*Início da Validação do campos*/

        //NOME
        if(!nome || typeof nome == undefined || nome == null){
            erros.push({text: 'Nome inválido'});
        }
        //SOBRENOME
        if(!sobrenome || typeof sobrenome == undefined || sobrenome == null){
            erros.push({text: 'sobrenome inválido'});
        }
        //CPF
        if(!cpf || cpf == null){
            erros.push({text: 'CPF inválido'});
        }
        //DATA DE NASCIMENTO
        if(!dataNascimento || dataNascimento == null || dataNascimento == undefined) {
            erros.push({text: 'CPF inválido'});
        }
        //E-MAIL
        if(validator.isEmail(email)){
            erros.push({text: 'E-mail inválido'})
        }


        if(erros.length > 0){
            res.render('doar', {erros, nome, email, cpf});
        } else{
            req.flash('msg_sucesso', 'Obrigado, Doação feita com sucesso!');
            //no caso, redirecionar para lista de usuários
            res.redirect('/doar')
        }
    

});


module.exports = router;
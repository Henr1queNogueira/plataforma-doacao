const express = require('express');
const router = express.Router();
const ejs = require('ejs');
const flash = require('express-flash');

const { text } = require('body-parser');
const Contato = require('../models/Contato');

router.get('/contato', (req, res) => {
    res.render('contato')
});

router.post('/contato', (req, res) => {
    var erros = [];

    var {nomeContato, emailContato, msgContato} = req.body;

    if(!nomeContato || typeof nomeContato == undefined || nomeContato == null){
        erros.push({text: 'Nome inválido'});
    }
    if (typeof emailContato == undefined || !emailContato || emailContato == null) {
        erros.push({text: 'E-mail inválido'});
    }
    if(msgContato == undefined || !msgContato || msgContato == null){
        erros.push({text: 'O campo não pode ser vazio'});
    }

    if(erros.length > 0){
        res.render('contato', {erros, nomeContato, emailContato, msgContato});
    }else{
        req.flash('msg_sucesso', 'Mensagem enviada!');

        const comprovanteDoacao = `A Casa de Apoio - Filhos de Hiram, entidade sem fins lucrativos, 
        inscrita no CNPJ sob o nº(informar), com sede à (endereço da casa), declara ter recebido de 
        ${nomeContato}, inscrito(a) no CPF sob o nº ${emailContato}, em DOAÇÂO a importância de R$, 
        declarando ainda que os recursos aplicados integralmente na 
        construção da casa de apoio para atender pacientes do Hospital do Amor.`

        Contato.create({
            nomeContato: nomeContato,
            emailContato: emailContato,
            msgContato: msgContato

        }).then(() => {
            //no caso, redirecionar para contato
            res.render('mensagens/comprovanteDoacao', {comprovanteDoacao: comprovanteDoacao})
        })
        
    }
}); 

module.exports = router;
/**EXPRESS */
const express = require("express");
const app = express();

/**Express session */
const session = require("express-session");

/**Express flash */
const flash = require('express-flash');

/**Cookie Parser */
const cookieParser = require('cookie-parser');

/**BODY PARSER */
const bodyParser = require('body-parser');
const { text } = require("body-parser");

/**VALIDATOR (biblioteca que ajuda a validar formulário) */
const validator = require('validator');
const { cpf } = require('cpf-cnpj-validator');

/**EJS c/ express*/
app.set('view engine', 'ejs');
app.use(express.static('public'));

/**BODY PARSER c/ express */
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

/**Config do cookie com express */
app.use(cookieParser("jsaddsh"));
app.use(session({
    secret: 'keyboard cat',
    resave: true,
    saveUninitialized: true,
    cookie: { maxAge: 6000 }
  }))

app.use(flash());

//Middleware
app.use((req, res, next) => {
    //variáveis globais (vc consegue acessar em qualquer parte da aplicação)
    res.locals.msg_sucesso = req.flash('msg_sucesso');
    res.locals.msg_error = req.flash('msg_error');
    next();

});

/**IMPORTANDO OS CONTROLLERS */
const doarController = require('./controllers/doarController');
const contatoController = require('./controllers/contatoController');


/**Rotas exportadas da pasta controllers*/
app.use('/', doarController);
app.use('/', contatoController);



/**--- ROTAS ----- */
app.get("/", function(req, res){
    res.render("index");
});

//QUEM SOMOS
app.get("/sobre", function(req, res){
    res.render("sobre")
});



/**SERVIDOR */
app.listen(8000, function(erro){
    if(!erro){
        console.log("Servidor iniciado na porta 8000");

    }else{
        console.log("Deu erro!")
    }
})
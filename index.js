/**EXPRESS */
const express = require("express");
const app = express();

/**BODY PARSER */
const bodyParser = require('body-parser');

/**EJS c/ express*/
app.set('view engine', 'ejs');
app.use(express.static('public'));

/**BODY PARSER c/ express */
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

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
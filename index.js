/**EXPRESS */
const express = require("express");
const app = express();

/**EJS c/ express*/
app.set('view engine', 'ejs');
app.use(express.static('public'));


/**ROTAS */
app.get("/", function(req, res){
    res.render("index");
});

//QUEM SOMOS
app.get("/sobre", function(req, res){
    res.render("sobre")
});

//FALE CONOSCO
app.get("/contato", function(req, res){
    res.render("contato");
});

//FORMULÁRIO PARA DOAR
app.get("/doar", function(req, res){
    res.render("doar");
});

/**SERVIDOR */
app.listen(8000, function(erro){
    if(!erro){
        console.log("Servidor iniciado na porta 8000");

    }else{
        console.log("Deu erro!")
    }
})
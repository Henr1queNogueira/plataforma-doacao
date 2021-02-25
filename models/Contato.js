const Sequelize = require("sequelize");
const connection = require('../database/database'); 


const Contato = connection.define('contatos', {
    nomeContato:{
        type: Sequelize.STRING,
        allowNull: false,
        notNull: true     
    },
    emailContato:{
        type: Sequelize.STRING,
        allowNull: false,
        notNull: true
        },
    msgContato:{
        type: Sequelize.TEXT,
        allowNull: false,
        notNull: true
    }

});

module.exports = Contato;

/*Contato.sync({force: false}).then(() => {
    console.log('tabela criada')
})*/

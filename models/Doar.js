const Sequelize = require("sequelize")  
const connection = require("../database/database")
const moment = require('moment');

const Doacao = connection.define('doacoes', {
    nome:{
        type: Sequelize.STRING,
        allowNull: false,
        notNull: true     
    },
    sobrenome:{
        type: Sequelize.STRING,
        allowNull: false,
        notNull: true     
    },
    cpf:{
        type: Sequelize.INTEGER,
        allowNull: false,
        notNull: true     
    },
    dataNascimento:{
        type: Sequelize.DATE,
        get: function() {return moment.utc(this.getDataValue('dataNascimento')).format('YYYY-MM-DD')},
        allowNull: false
        },
    email:{
        type: Sequelize.STRING,
        allowNull: false,
        notNull: true
        },
    contato:{
        type: Sequelize.STRING,
        allowNull: false,
        notNull: true
    },
    cep:{
        type: Sequelize.STRING,
        allowNull: false,
        notNull: true
    },
    endereco:{
        type: Sequelize.STRING,
        allowNull: false,
        notNull: true
    },
    bairro:{
        type: Sequelize.STRING,
        allowNull: false,
        notNull: true
    },
    cidade:{
        type: Sequelize.STRING,
        allowNull: false,
        notNull: true
    },
    estado:{
        type: Sequelize.STRING,
        allowNull: false,
        notNull: true
    },
    pais:{
        type: Sequelize.STRING,
        allowNull: false,
        notNull: true
    },
    doacao:{
        type: Sequelize.DOUBLE,
        allowNull: false,
        notNull: true
    },
});

module.exports = Doacao;

/*Doacao.sync({force: false}).then(() => {
    console.log("tabela de doação criada")
});*/
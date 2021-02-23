const Sequelize = require("sequelize");

const connection = new Sequelize('sistemaDoacao', 'root', 'henri201', {
    host: 'localhost',
    dialect: 'mysql'
});
module.exports = connection;
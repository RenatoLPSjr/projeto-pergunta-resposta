const Sequelize = require('sequelize');

const connection = new Sequelize('guiaperguntas', 'root','38242628',{
    host:'localhost',
    dialect: 'mysql'
});

module.exports = connection;
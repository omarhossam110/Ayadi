const Sequelize = require('sequelize');

const sequelize = new Sequelize(
    'online_shop',
    'root',
    '01004938289',{ 
    dialect: 'mysql',
    host: 'localhost'
});

module.exports = sequelize;
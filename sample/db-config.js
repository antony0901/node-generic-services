const Sequelize = require('sequelize');
const sequelize = new Sequelize('mgis', 'root', 'Palomino1!', {
  host: 'localhost',
  pool: {
    max: 100,
    min: 1,
    acquire: 30000,
    idle: 30000
  },
  operatorsAliases: false,
  dialect: 'mysql'
});

module.exports = {
  db: sequelize
};

const { Sequelize } = require( 'sequelize' );

const sequelize = new Sequelize('disney', 'root', '', {
  host: 'localhost',
  dialect: 'mysql'
});

module.exports = sequelize;
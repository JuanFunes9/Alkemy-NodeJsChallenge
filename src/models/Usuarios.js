const { DataTypes } = require( 'sequelize' );
const sequelize = require( '../database/database' );

const Usuarios = sequelize.define( 'usuarios', {
  uid: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  userName: {
    type: DataTypes.STRING,
    allowNull: false
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true
  }
}, {
  timestamps: false
} );

module.exports = Usuarios;
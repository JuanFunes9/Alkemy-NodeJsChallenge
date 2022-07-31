const sequelize = require('../database/database');
const { DataTypes } = require('sequelize');
//models:
const Peliculas = require('./Peliculas');
const Personajes = require('./Personajes');
const Usuarios = require('./Usuarios');

//Tabla intermedia para la relacion N-a-N
const peliculasPersonajes = sequelize.define('peliculas_personajes', {
  peliculaId: {
    type: DataTypes.INTEGER,
    references: {
      model: Peliculas,
      key: 'id'
    }
  },
  personajeId: {
    type: DataTypes.INTEGER,
    references: {
      model: Personajes,
      key: 'id'
    }
  }
}, {
  timestamps: false
}
)


//relaciones N a N:
Peliculas.belongsToMany(Personajes, { through: peliculasPersonajes });
Personajes.belongsToMany(Peliculas, { through: peliculasPersonajes });
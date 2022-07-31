const sequelize = require('../database/database');
const { DataTypes } = require('sequelize');
//models:
const Peliculas = require('./Peliculas');
const Personajes = require('./Personajes');

//Tabla intermedia para la relacion N-a-N
const personajesPeliculas = sequelize.define('personajes_peliculas', {
  personajeId: {
    type: DataTypes.INTEGER,
    references: {
      model: Personajes,
      key: 'id'
    }
  },
  peliculaId: {
    type: DataTypes.INTEGER,
    references: {
      model: Peliculas,
      key: 'id'
    }
  }
}, {
  timestamps: false
}
)


//relaciones N a N:
Peliculas.belongsToMany(Personajes, { through: personajesPeliculas });
Personajes.belongsToMany(Peliculas, { through: personajesPeliculas });

module.exports = personajesPeliculas;
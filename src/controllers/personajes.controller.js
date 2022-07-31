const { Op } = require('sequelize');
//model:
const Personajes = require('../models/Personajes');
const Peliculas = require( '../models/Peliculas' );

const getPersonajes = async (req, res) => {
  const { name, age, weight, movies } = req.query;

  let query = {
    attributes: ["id", "img", "name"]
  }

  if (name) {
    query.where = { name: { [Op.substring]: name } }
  } else if (age) {
    query.where = { age: { [Op.eq]: age } }
  } else if (weight) {
    query.where = { weight: { [Op.eq]: weight } }
  } else if (movies) {
    query.where = { movies: { [Op.eq]: movies } }
  }

  const personajes = await Personajes.findAll(query);

  return res.json({
    personajes
  });
}

const getPersonajesById = async (req, res) => {
  const { id } = req.params;
  const personaje = await Personajes.findByPk( id, {
    include: {
      model: Peliculas,
      as: 'peliculas',
      through: {
        attributes: []
      }
    }
  } )

  if (!personaje) {
    return res.status(400).json({
      error: `El personaje con el ID: ${id} no existe.`
    })
  } else {
    return res.json({
      personaje
    })
  }
}

const newPersonaje = async (req, res) => {
  const { img, name, age, weight, history } = req.body;

  const newPersonaje = await Personajes.create({
    img,
    name,
    age,
    weight,
    history
  })

  return res.json({ newPersonaje });
}

const editPersonaje = async (req, res) => {
  const { id } = req.params;
  const { img, name, age, weight, history } = req.body;

  const editedPersonaje = await Personajes.update({
    img,
    name,
    age,
    weight,
    history
  }, {
    where: { id }
  })

  return res.json({
    msg: `El personaje con ID: ${id} ha sido editado con exito.`
  })

}

const deletePersonaje = async (req, res) => {
  const { id } = req.params;

  const deletedPersonaje = await Personajes.destroy({
    where: { id }
  })

  res.json({
    msg: `El personaje con ID: ${id} ha sido eliminado con exito.`
  })
}

module.exports = {
  getPersonajes,
  getPersonajesById,
  newPersonaje,
  editPersonaje,
  deletePersonaje
};
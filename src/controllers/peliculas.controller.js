const { Op } = require('sequelize');
//model:
const Peliculas = require( '../models/Peliculas' )

const getMovies = async( req, res ) => {
  let { title, gender, order } = req.query;

  let query = {
    attributes: ["id", "img", "title", "year"]
  }

  if (title) {
    query.where = { title: { [Op.substring]: title } }
  } else if (gender) {
    query.where = { gender: { [Op.eq]: gender } }
  } else if (order == 'ASC') {
    query.order = [[ 'year', 'asc' ]]
  } else if (order == 'DESC') {
    query.order = [ ['year', 'desc'] ]
  }

  console.log(query)

  const peliculas = await Peliculas.findAll( query );

  return res.json({
    peliculas
  });
}

const getMovieById = async( req, res ) => {
  const { id } = req.params;

  const pelicula = await Peliculas.findOne({
    where: { id }
  });

  if( !pelicula ){
    return res.status(400).json({
      error: `La pelicula con el ID: ${id} no existe.`
    })
  }

  return res.json({
    pelicula
  });
}

const newMovie = async( req, res ) => {
  const { img, title, year, rate, gender, type } = req.body;

  const newMovie = await Peliculas.create({
    img,
    title,
    year,
    rate,
    gender,
    type
  });

  return res.json({ newMovie })
}

const editMovie = async( req, res ) => {
  const { id } = req.params;
  const { img, title, year, rate, gender, type } = req.body;

  const editedMovie = await Peliculas.update({
    img,
    title,
    year,
    rate,
    gender,
    type
  },{
    where: { id }
  })

  return res.json({
    msg: `La pelicula con ID: ${ id } ha sido editada con exito.`
  })
}

const deleteMovie = async( req, res ) => {
  const { id } = req.params;

  const deletedMovie = await Peliculas.destroy({
    where: { id }
  });

  return res.json({
    msg: `La pelicula con ID: ${id} ha sido eliminada con exito.`
  })
}

module.exports = {
  getMovies,
  getMovieById,
  newMovie,
  editMovie,
  deleteMovie
};
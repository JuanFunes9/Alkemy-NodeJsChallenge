const { request:req ,response: res } = require('express');

const getMovies = async( req, res ) => {
  res.send( 'movies GET' )
}

const getMovieById = async( req, res ) => {
  const { id } = req.params;
  res.send( 'movies GET by ID: ' + id )
}

const newMovie = async( req, res ) => {
  res.send( 'movies POST' )
}

const editMovie = async( req, res ) => {
  res.send( 'movies PUT' )
}

const deleteMovie = async( req, res ) => {
  res.send( 'movies DELETE' )
}

module.exports = {
  getMovies,
  getMovieById,
  newMovie,
  editMovie,
  deleteMovie
};
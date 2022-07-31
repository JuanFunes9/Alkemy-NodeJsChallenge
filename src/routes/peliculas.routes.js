const router = require('express').Router();

//middlewares:
const validarJWT = require('../middlewares/validar-jwt');
const {
  validarGetPeliculaById,
  validarNewPelicula,
  validarEditPelicula,
  validarDeletePelicula
} = require( '../middlewares/validar-peliculas' )

//controllers:
const {
  getMovies,
  getMovieById,
  newMovie,
  editMovie,
  deleteMovie
} = require('../controllers/peliculas.controller');

router.get('/', validarJWT, getMovies)

router.get('/:id', validarGetPeliculaById, getMovieById)

router.post('/', validarNewPelicula, newMovie)

router.put('/:id', validarEditPelicula, editMovie)

router.delete('/:id', validarDeletePelicula, deleteMovie)

module.exports = router;
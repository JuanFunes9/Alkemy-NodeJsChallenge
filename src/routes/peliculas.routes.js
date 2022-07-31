const router = require('express').Router();
const { check } = require('express-validator');
//helpers:
const validarId = require( '../helpers/validar-id' );
//middlewares:
const validarCampos = require('../middlewares/validar-campos');
const validarJWT = require('../middlewares/validar-jwt');
//controller:
const {
  getMovies,
  getMovieById,
  newMovie,
  editMovie,
  deleteMovie
} = require('../controllers/peliculas.controller');

router.get('/', validarJWT, getMovies)

router.get('/:id', [
  validarJWT,
  check('id', 'Ingrese un ID numerico valido mayor a 0').isInt({ min: 0 }),
  validarCampos
], getMovieById)

router.post('/', [
  validarJWT,
  check( 'img', 'Debe ingresar una imagen URL valida.' ).notEmpty().isURL(),
  check( 'title', "Debes ingresar un titulo de minimo 2 caracteres." ).isLength({ min: 2 }),
  check( 'year', "Debes ingresar un año valido." ).isInt({ min: 1900, max: 2022 }),
  check( 'rate', 'Debes ingresar un rating de 0 a 5' ).isFloat({ min: 0.0, max: 5.0 }),
  check( 'gender', "Debes ingresar un genero de peliculas valido: 'fantasy', 'action', 'comedy', 'terror', 'super-heros'" )
    .isIn(['fantasy', 'action', 'comedy', 'terror', 'super-heros']),
    check( 'type', "Debes ingresar un tipo valido: 'serie' o 'pelicula'" ).isIn(['serie', 'pelicula']),
  validarCampos
], newMovie)

router.put('/:id', [
  validarJWT,
  check('id', 'Ingrese un ID numerico valido mayor a 0').isInt({ min: 0 }),
  check('id').custom(validarId),
  check( 'img', 'Debe ingresar una imagen URL valida.' ).notEmpty().isURL(),
  check( 'title', "Debes ingresar un titulo de minimo 2 caracteres." ).isLength({ min: 2 }),
  check( 'year', "Debes ingresar un año valido." ).isInt({ min: 1900, max: 2022 }),
  check( 'rate', 'Debes ingresar un rating de 0 a 5' ).isFloat({ min: 0.0, max: 5.0 }),
  check( 'gender', "Debes ingresar un genero de peliculas valido: 'fantasy', 'action', 'comedy', 'terror', 'super-heros'" )
    .isIn(['fantasy', 'action', 'comedy', 'terror', 'super-heros']),
    check( 'type', "Debes ingresar un tipo valido: 'serie' o 'pelicula'" ).isIn(['serie', 'pelicula']),
  validarCampos
], editMovie)

router.delete('/:id', [
  validarJWT,
  check('id', 'Ingrese un ID numerico valido mayor a 0').isInt({ min: 0 }),
  check('id').custom(validarId),
  validarCampos
], deleteMovie)

module.exports = router;
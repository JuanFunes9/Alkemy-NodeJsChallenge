const { check } = require('express-validator');
const validarJWT = require('../middlewares/validar-jwt');
const validarCampos = require('../middlewares/validar-campos');
const validarIdPelicula = require( '../helpers/validar-id-pelicula' );

const validarGetPeliculaById = [
  validarJWT,
  check('id', 'Ingrese un ID numerico valido mayor a 0').isInt({ min: 0 }),
  validarCampos
]

const validarNewPelicula = [
  validarJWT,
  check( 'img', 'Debe ingresar una imagen URL valida.' ).notEmpty().isURL(),
  check( 'title', "Debes ingresar un titulo de minimo 2 caracteres." ).isLength({ min: 2 }),
  check( 'year', "Debes ingresar un año valido." ).isInt({ min: 1900, max: 2022 }),
  check( 'rate', 'Debes ingresar un rating de 0 a 5' ).isFloat({ min: 0.0, max: 5.0 }),
  check( 'gender', "Debes ingresar un genero de peliculas valido: 'fantasy', 'action', 'comedy', 'terror', 'super-heros'" )
    .isIn(['fantasy', 'action', 'comedy', 'terror', 'super-heros']),
    check( 'type', "Debes ingresar un tipo valido: 'serie' o 'pelicula'" ).isIn(['serie', 'pelicula']),
  validarCampos
]

const validarEditPelicula = [
  validarJWT,
  check('id', 'Ingrese un ID numerico valido mayor a 0').isInt({ min: 0 }),
  check('id').custom(validarIdPelicula),
  check( 'img', 'Debe ingresar una imagen URL valida.' ).notEmpty().isURL(),
  check( 'title', "Debes ingresar un titulo de minimo 2 caracteres." ).isLength({ min: 2 }),
  check( 'year', "Debes ingresar un año valido." ).isInt({ min: 1900, max: 2022 }),
  check( 'rate', 'Debes ingresar un rating de 0 a 5' ).isFloat({ min: 0.0, max: 5.0 }),
  check( 'gender', "Debes ingresar un genero de peliculas valido: 'fantasy', 'action', 'comedy', 'terror', 'super-heros'" )
    .isIn(['fantasy', 'action', 'comedy', 'terror', 'super-heros']),
    check( 'type', "Debes ingresar un tipo valido: 'serie' o 'pelicula'" ).isIn(['serie', 'pelicula']),
  validarCampos
]

const validarDeletePelicula = [
  validarJWT,
  check('id', 'Ingrese un ID numerico valido mayor a 0').isInt({ min: 0 }),
  check('id').custom(validarIdPelicula),
  validarCampos
]

module.exports = {
  validarGetPeliculaById,
  validarNewPelicula,
  validarEditPelicula,
  validarDeletePelicula
}

const { check } = require( 'express-validator' );
const validarJWT = require( './validar-jwt' );
const validarCampos = require( './validar-campos' );
const validarIdPersonaje = require( '../helpers/validar-id-personaje' );


const validarGetPersonajeById = [
  validarJWT,
  check( 'id', 'Ingrese un ID numerico valido mayor a 0' ).isInt({ min: 0 }),
  validarCampos
]

const validarNewPersonaje = [
  validarJWT,
  check( 'img', 'Ingrese una imagen URL valida.' ).notEmpty().isURL(),
  check( 'name', 'El nombre es obligatorio.' ).isString().notEmpty(),
  check( 'age', 'La edad debe ser un valor numerico entre 0 y 200.' ).notEmpty().isInt({min: 0, max: 200}),
  check( 'weight', 'El peso debe ser un valor numerico entre 0 y 2000.' ).notEmpty().isInt({min: 0, max: 2000}),
  check( 'history', 'La historia o descripcion es obligatoria.' ).isString().notEmpty(),
  validarCampos
]

const validarEditPersonaje = [
  validarJWT,
  check( 'img', 'La imagen URL es obligatoria.' ).isURL().notEmpty(),
  check( 'name', 'El nombre es obligatorio.' ).notEmpty(),
  check( 'age', 'La edad debe ser un valor numerico entre 0 y 200.' ).notEmpty().isInt({min: 0, max: 200}),
  check( 'weight', 'El peso debe ser un valor numerico entre 0 y 1000.' ).notEmpty().isInt({min: 0, max: 1000}),
  check( 'history', 'La historia o descripcion es obligatoria.' ).notEmpty(),
  check( 'id', 'Ingrese un ID numerico valido mayor a 0.' ).isInt({ min: 0 }),
  check( 'id' ).custom( validarIdPersonaje ),
  validarCampos
]

const validarDeletePersonaje = [
  validarJWT,
  check( 'id', 'Ingrese un ID numerico valido mayor a 0.' ).isInt({ min: 0 }),
  check( 'id' ).custom( validarIdPersonaje ),
  validarCampos
]

module.exports = {
  validarGetPersonajeById,
  validarNewPersonaje,
  validarEditPersonaje,
  validarDeletePersonaje
}
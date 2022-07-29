const router = require( 'express' ).Router();
const { check } = require( 'express-validator' );
//middleware:
const validarCampos = require( '../middlewares/validar-campos' );
//helpers:
const validarId = require( '../helpers/validar-id' );
//controller:
const {
  getPersonajes,
  getPersonajesById,
  newPersonaje,
  editPersonaje,
  deletePersonaje
} = require( '../controllers/personajes.controller' )

//rutes:
router.get( '/', getPersonajes );

router.get( '/:id', [
  check( 'id', 'Ingrese un ID numerico valido mayor a 0.' ).isInt({ min: 0 }),
  validarCampos
], getPersonajesById );

router.post( '/', [
  check( 'img', 'La imagen URL es obligatoria.' ).notEmpty(),
  check( 'name', 'El nombre es obligatorio.' ).notEmpty(),
  check( 'age', 'La edad debe ser un valor numerico entre 0 y 200.' ).notEmpty().isInt({min: 0, max: 200}),
  check( 'weight', 'El peso debe ser un valor numerico entre 0 y 2000.' ).notEmpty().isInt({min: 0, max: 2000}),
  check( 'history', 'La historia o descripcion es obligatoria.' ).notEmpty(),
  validarCampos
], newPersonaje );

router.put( '/:id', [
  check( 'img', 'La imagen URL es obligatoria.' ).notEmpty(),
  check( 'name', 'El nombre es obligatorio.' ).notEmpty(),
  check( 'age', 'La edad debe ser un valor numerico entre 0 y 200.' ).notEmpty().isInt({min: 0, max: 200}),
  check( 'weight', 'El peso debe ser un valor numerico entre 0 y 1000.' ).notEmpty().isInt({min: 0, max: 1000}),
  check( 'history', 'La historia o descripcion es obligatoria.' ).notEmpty(),
  check( 'id', 'Ingrese un ID numerico valido mayor a 0.' ).isInt({ min: 0 }),
  check( 'id' ).custom( validarId ),
  validarCampos
], editPersonaje );

router.delete( '/:id', [
  check( 'id', 'Ingrese un ID numerico valido mayor a 0.' ).isInt({ min: 0 }),
  check( 'id' ).custom( validarId ),
  validarCampos
], deletePersonaje );

module.exports = router;
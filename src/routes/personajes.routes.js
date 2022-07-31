const router = require( 'express' ).Router();

//middlewares:
const validarJWT = require( '../middlewares/validar-jwt' );
const {
  validarGetPersonajeById,
  validarNewPersonaje,
  validarEditPersonaje,
  validarDeletePersonaje
} = require( '../middlewares/validar-personajes' );

//controllers:
const {
  getPersonajes,
  getPersonajesById,
  newPersonaje,
  editPersonaje,
  deletePersonaje
} = require( '../controllers/personajes.controller' )

//rutes:
router.get( '/', validarJWT, getPersonajes );

router.get( '/:id', validarGetPersonajeById, getPersonajesById );

router.post( '/', validarNewPersonaje, newPersonaje );

router.put( '/:id', validarEditPersonaje, editPersonaje );

router.delete( '/:id', validarDeletePersonaje, deletePersonaje );

module.exports = router;
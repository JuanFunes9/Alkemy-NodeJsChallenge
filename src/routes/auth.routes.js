const router = require('express').Router();
const { check } = require('express-validator');
//middlewares:
const validarCampos = require( '../middlewares/validar-campos' );
const validarUsuario = require( '../middlewares/validar-usuario' );
//helpers:
const validarNewEmail = require( '../helpers/validar-newEmail' );
//Controller:
const {
  newUsuario,
  loginUsuario
} = require('../controllers/auth.controller');

router.post('/register', [
  check( 'userName', 'El user name es obligatorio y al menos 3 caractéres' ).isLength({ min: 3, max: 100 }),
  check( 'password', "La contraseña es obligatoria y debe ser de al menos 6 caractéres." ).isLength({ min: 6, max: 100 }),
  check( 'email', 'El email debe ser una casilla de correo valida.' ).isEmail(),
  check( 'email' ).custom( validarNewEmail ),
  validarCampos
], newUsuario);

router.post('/login', [
  check( 'userName', 'El user name es obligatorio y al menos 3 caractéres' ).isLength({ min: 3, max: 100 }),
  check( 'password', "La contraseña es obligatoria y debe ser de al menos 6 caractéres." ).isLength({ min: 6, max: 100 }),
  check( 'email', 'El email debe ser una casilla de correo valida.' ).isEmail(),
  validarCampos,
  validarUsuario
  
], loginUsuario);




module.exports = router;
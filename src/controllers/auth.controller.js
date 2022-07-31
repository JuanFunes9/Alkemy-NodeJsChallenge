const bcryptjs = require('bcryptjs');
//Model:
const Usuarios = require('../models/Usuarios');
//helpers:
const generarJWT = require( '../helpers/generar-jwt' );
const sendEmail = require( '../helpers/send-email' );

const newUsuario = async (req, res) => {
  let { userName, password, email } = req.body;

  //Encriptar la PW:
  const salt = bcryptjs.genSaltSync();
  password = bcryptjs.hashSync(password, salt);

  //Guardar en DB:
  const newUser = await Usuarios.create({
    userName,
    password,
    email
  })

  //Enviar mail de bienvenida:
  sendEmail( email )

  res.json({
    msg: "Usuario creado con exito.",
    email,
    userName
  })
}

const loginUsuario = async (req, res) => {
  const { email } = req.body;

  const user = await Usuarios.findOne({
    attributes: ["uid", "userName", "email"],
    where: { email }
  });

  //generar JWT:
  const token = await generarJWT( user.uid );

  //devolver user autenticado + token:
  res.json({
    user,
    token
  })
}


module.exports = {
  newUsuario,
  loginUsuario
}
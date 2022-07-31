const Usuarios = require('../models/Usuarios');

const validarEmail = async (email = '') => {
  const emailExist = await Usuarios.findOne({
    where: {
      email
    }
  })

  if (emailExist) {
    throw new Error(`El email ${email} ya esta registrado.`)
  }
}

module.exports = validarEmail;
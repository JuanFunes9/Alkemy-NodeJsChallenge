const bcryptjs = require('bcryptjs');
//model:
const Usuarios = require('../models/Usuarios');

const validarUsuario = async (req, res, next) => {
  const { userName, email, password } = req.body;

  //verificar si el user existe:
  const user = await Usuarios.findOne({
    where: { email }
  });

  if (!user) {
    return res.status(400).json({
      error: `El usuario: ${email} no existe.`
    })
  }

  //verificar si el nombre de usuario coincide con el email
  if (user.userName !== userName) {
    return res.status(400).json({
      error: `El usuario y la contraseña no coinciden.`
    })
  }

  //verificar password:
  const validPasswd = bcryptjs.compareSync(password, user.password);
  if (!validPasswd) {
    return res.status(400).json({
      error: "La contraseña es incorrecta."
    })
  }

  next();
}

module.exports = validarUsuario;
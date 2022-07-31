const jwt = require('jsonwebtoken');
//models:
const Usuarios = require('../models/Usuarios');

const validarJWT = async (req, res, next) => {

  const token = req.header('x-token');

  if (!token) {
    return res.status(401).json({
      error: "No envio un token valido. No posee permisos para ingresar."
    })
  }

  try {

    const { uid } = jwt.verify(token, process.env.SECRETKEY);

    req.uid = uid;
    req.userAuth = await Usuarios.findOne({
      where: { uid }
    })

    if (!req.userAuth) {
      return res.status(401).json({
        error: "No envio un token valido. Usuario no existente."
      })
    }

    next();
  } catch (error) {
    console.log(error);
    res.status(401).json({
      error: "No envio un token valido. No posee permisos para ingresar."
    })
  }

}

module.exports = validarJWT;
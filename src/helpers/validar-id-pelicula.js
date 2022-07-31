const Peliculas = require('../models/Peliculas');

const validarIdPelicula = async (id) => {
  if (id > 0) {
    const idValido = await Peliculas.findOne({
      where: { id }
    });

    if (!idValido) {
      throw new Error(`La pelicula con ID: ${id} no existe.`)
    }
  }
}

module.exports = validarIdPelicula;
const fs = require( 'fs' );
const path = require( 'path' )
const Peliculas = require( '../../models/Peliculas' );
const Personajes = require( '../../models/Personajes' );
const personajesPeliculas = require( '../../models/Asociations' );

const uploadDefaultData = () => {

  const personajes = JSON.parse(fs.readFileSync( path.join(__dirname + '/default-personajes.txt'), 'utf-8' ))
  const peliculas = JSON.parse(fs.readFileSync( path.join(__dirname + '/default-peliculas.txt'), 'utf-8' ))

  personajes.forEach(element => {
    Personajes.create( element )
  });

  peliculas.forEach(element => {
    Peliculas.create( element )
  });


  personajesPeliculas.create({
    personajeId: 1,
    peliculaId: 1
  })

  personajesPeliculas.create({
    personajeId: 1,
    peliculaId: 2
  })

  personajesPeliculas.create({
    personajeId: 1,
    peliculaId: 4
  })

  personajesPeliculas.create({
    personajeId: 2,
    peliculaId: 1
  })

  personajesPeliculas.create({
    personajeId: 2,
    peliculaId: 7
  })

  personajesPeliculas.create({
    personajeId: 3,
    peliculaId: 2
  })

  personajesPeliculas.create({
    personajeId: 4,
    peliculaId: 5
  })

  personajesPeliculas.create({
    personajeId: 4,
    peliculaId: 9
  })

  personajesPeliculas.create({
    personajeId: 7,
    peliculaId: 5
  })

  console.log( 'Data por default agregada con exito.' )

}

module.exports = uploadDefaultData;
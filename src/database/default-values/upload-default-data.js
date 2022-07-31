const fs = require( 'fs' );
const path = require( 'path' )
const Peliculas = require( '../../models/Peliculas' );
const Personajes = require( '../../models/Personajes' );

const uploadDefaultData = () => {

  const personajes = JSON.parse(fs.readFileSync( path.join(__dirname + '/default-personajes.txt'), 'utf-8' ))
  const peliculas = JSON.parse(fs.readFileSync( path.join(__dirname + '/default-peliculas.txt'), 'utf-8' ))

  personajes.forEach(element => {
    Personajes.create( element )
  });

  peliculas.forEach(element => {
    Peliculas.create( element )
  });

  console.log( 'Data por default agregada con exito.' )

}

module.exports = uploadDefaultData;
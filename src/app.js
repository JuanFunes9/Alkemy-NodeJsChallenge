const express = require('express');
const app = express();
//import routes
const personajesRoutes = require( './routes/personajes.routes' );
const peliculasRoutes = require( './routes/peliculas.routes' );
const authRoutes = require( './routes/auth.routes' );

//settings
app.use(express.json());                            //guarda la info que llega en el req.body
app.use(express.urlencoded({ extended: true }));

//routes
app.use( '/characters', personajesRoutes );
app.use( '/movies', peliculasRoutes );
app.use( '/auth', authRoutes );
app.get('/*', (req, res) => {
  res.status(404).json({
    error: "Ruta no implementada."
  })
});

module.exports = app;
const router = require( 'express' ).Router();
//controller:
const {
  getMovies,
  getMovieById,
  newMovie,
  editMovie,
  deleteMovie
} = require( '../controllers/peliculas.controller' );

router.get( '/', getMovies )

router.get( '/:id', getMovieById )

router.post( '/', newMovie )

router.put( '/:id', editMovie )

router.delete( '/:id', deleteMovie )

module.exports = router;
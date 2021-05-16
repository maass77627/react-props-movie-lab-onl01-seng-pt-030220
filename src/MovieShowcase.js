import React, { Component } from 'react';
import MovieCard from './card-components/MovieCard.js'
import movieData from './data.js'

export default class MovieShowcase extends Component {

  generateMovieCards = () => {
<<<<<<< HEAD
    return movieData.map(movie => <MovieCard key={movie.title} title={movie.title} genres={movie.genres} IMDBRating={movie.IMDBRating} poster={movie.poster}/>)
=======
    array = posterMap.map(i => i.title, i.genres, i.poster, i.IMDBRating)
>>>>>>> 4c42719aeac4f29f1d28fd6f3fef7dce05a9332b



    // map over your movieData array and return an array of the correct JSX
  }

  render() {
    return (
      <div id="movie-showcase">
        {this.generateMovieCards()}

      </div>
    )
  }
}

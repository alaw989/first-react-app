import React, { Component } from "react";
import "./MoviePoster.css";

 const MoviePoster = props => {
   const backdrop = props.movie[0].poster_path
  const url = `https://image.tmdb.org/t/p/w1280/${backdrop}`;
 
  return (
    <div className="MoviePoster">
      <img src={url} />
    </div>
  );
};

export default MoviePoster; 
/*conditionally render the moviePoster component as well {state.movieData && <MoviePoster /> }
and make MoviePoster a dumb-presentiational  component, ( function accepting arguments, returning jsx )*/

/*you could  trigger the API called from the enter key event, only maintain 
one state variable upon resolving the response, and pass that down as a prop to the moviePoster component
*/

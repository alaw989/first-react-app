import React, { Component } from 'react';

const MovieTitle = (props) => {
    const title = props.movie[0].title;
    return (
        <h1>{title}</h1>
    )
}
 
export default MovieTitle;
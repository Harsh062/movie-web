import React, { Fragment } from 'react';
import  { PopularMovieCard } from './PopularMovieCard';
import { Grid } from 'react-bootstrap';

 const PopularMoviesList = (props) => {
    console.log(`props.movies: `, props.movies);
    const moviesList = props.movies.results.map((movie) => <PopularMovieCard movie={movie} imagesConf={props.imagesConf} key={movie.id} id={movie.id}/>);    
    return (
        <Grid>
            { moviesList }
        </Grid>
    );
}

export { PopularMoviesList };


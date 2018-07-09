import React, { Fragment } from 'react';
import { Row, Col } from 'react-bootstrap';

import { Link } from 'react-router-dom';

import '../styles/movie.css';

const PopularMovieCard = (props) => {
    const { movie, imagesConf } = props;
    const imageUrl = imagesConf.base_url + imagesConf.poster_sizes[4] + movie.backdrop_path;
    return (
        <Row className="movie">
            <Col xs={6} md={6} className="movie-img">
            <Link to={`/movie/${movie.id}`}>
                <img src={imageUrl} />
            </Link>
            </Col>
            <Col xs={6} md={6} className="movie-desc">
                <Link className="movie-title" to={`/movie/${movie.id}`}>{movie.title}</Link>
                <div className="movie-release-date">{movie.release_date}</div>
                <div className="movie-overview">{movie.overview}</div>
            </Col>
        </Row>
    )
}

export { PopularMovieCard };


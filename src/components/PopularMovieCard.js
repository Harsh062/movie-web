import React, { Fragment } from 'react';
import { Row, Col } from 'react-bootstrap';
import '../styles/movie.css';

const PopularMovieCard = (props) => {
    const { movie, imagesConf } = props;
    const imageUrl = imagesConf.base_url + imagesConf.poster_sizes[4] + movie.backdrop_path;
    return (
        <Row className="movie">
            <Col xs={6} md={6} className="movie-img">
                <img src={imageUrl} />
            </Col>
            <Col xs={6} md={6} className="movie-desc">
                <div className="movie-title">{movie.title}</div>
                <div className="movie-release-date">{movie.release_date}</div>
                <div className="movie-overview">{movie.overview}</div>
            </Col>
        </Row>
    )
}

export { PopularMovieCard };


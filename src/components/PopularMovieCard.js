import React, { Fragment } from 'react';
import { Row, Col } from 'react-bootstrap';

const PopularMovieCard = (props) => {
    const { movie, imagesConf } = props;
    const imageUrl = imagesConf.base_url + imagesConf.poster_sizes[4] + movie.backdrop_path;
    return (
        <Row className="show-grid">
            <Col xs={6} md={6}>
                <img src={imageUrl} />
            </Col>
            <Col xs={6} md={6}>
                <div>{movie.title}</div>
                <div>{movie.release_date}</div>
                <div>{movie.vote_average}</div>
                <div>{movie.overview}</div>
            </Col>
        </Row>
    )
}

export { PopularMovieCard };


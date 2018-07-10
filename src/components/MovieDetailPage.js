import React, { Fragment } from 'react';
import { Grid, Row, Col } from 'react-bootstrap';

import '../styles/movie.css';

const MovieDetailPage = ({movieDetails, imageUrl, directors, writers}) => {
    const getDirectorNames = () => {
        let directorsList = '';
        directorsList = directors.map(d => d.name);
        return directorsList.join();
    }
    const getWriterNames = () => {
        let writersList = '';
        writersList = writers.map(w => w.name);
        return writersList.join();
    }
    return (
        <Fragment>
            <Row className="movie">
                <Col xs={6} md={6} className="movie-img">
                    <img src={imageUrl} />
                </Col>
                <Col xs={6} md={6}>
                    <div className="movie-title">{movieDetails.title}</div>
                    <div className="movie-release-date">Releas Date: {movieDetails.release_date}</div>
                    <div className="movie-release-date">Director: {getDirectorNames()}</div>
                    <div className="movie-release-date">Writer: {getWriterNames()}</div>
                </Col>
            </Row>
            <Row className="movie">
                <Col xs={12} md={12}>
                    <div>{movieDetails.overview}</div>
                </Col>
            </Row>
        </Fragment>
    )
}

export { MovieDetailPage };


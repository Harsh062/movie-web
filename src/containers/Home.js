import React, { Component, Fragment } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { LoadingIndicator } from '../shared/LoadingIndicator';
import { fetchPopularMoviesAndTvShows } from '../state/actions/authActions';
import { PopularMoviesList } from '../components/PopularMoviesList';

class Home extends Component {
    componentDidMount(){
        this.props.fetchPopularMoviesAndTvShows();
    }
    render() {
        const { 
                apiConf,
                popularMovies, fetchingPopularMovies, popularMoviesFetched, fetchPopularMoviesError,
                popularTvShows, fetchingPopularTvShows, popularTvShowsFetched, fetchPopularTvShowsError 
                } = this.props;
        return (
            <Fragment>
                {
                  <LoadingIndicator busy={fetchingPopularMovies || fetchingPopularTvShows} />
                }
                {
                    popularMoviesFetched && <PopularMoviesList movies={popularMovies} imagesConf={apiConf.images}/>
                }
                {
                    popularTvShowsFetched && <h1>popularTvShowsFetched</h1>
                }
            </Fragment>
        )
    }

}

const mapStateToProps = state => {
    const { apiConf } = state.apiConfReducer;
    const { popularMovies, fetchingPopularMovies, popularMoviesFetched, fetchPopularMoviesError } = state.popularMoviesReducer;
    const { popularTvShows, fetchingPopularTvShows, popularTvShowsFetched, fetchPopularTvShowsError } = state.popularTvShowsReducer;
    return {
        apiConf,
        popularMovies,
        fetchingPopularMovies,
        popularMoviesFetched,
        fetchPopularMoviesError,
        popularTvShows,
        fetchingPopularTvShows,
        popularTvShowsFetched,
        fetchPopularTvShowsError
    };
};

const mapDispatchToProps = dispatch => {
    return bindActionCreators({ fetchPopularMoviesAndTvShows }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
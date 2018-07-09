import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { fetchMovieDetailsAndCredits } from '../state/actions/authActions';
import { LoadingIndicator } from '../shared/LoadingIndicator';

 class MovieDetails extends Component {
   componentDidMount() {
     this.props.fetchMovieDetailsAndCredits(this.props.match.params.id);
   }

   renderMovieDetails = () => {
     
   }
    render() {
      const { movieCredits, 
              fetchingMovieCredits, 
              movieCreditsFetched, 
              fetchMovieCreditsError,
              movieDetails,
              fetchingMovieDetails,
              movieDetailsFetched,
              fetchMovieDetailsError,
              apiConf
             } = this.props;
      
      const imageUrl = apiConf.images.base_url + apiConf.images.poster_sizes[4] + movieDetails.backdrop_path;
      return  (
        <Fragment>
        <h1>Movie Details Component</h1>
        {
          <LoadingIndicator busy={fetchingMovieCredits || fetchingMovieDetails} />
        }
        {
          movieCreditsFetched && fetchingMovieDetails && 
          <Fragment>
            <img src={imageUrl} />
          </Fragment>
        }
      </Fragment>
      )
    }
}

const mapStateToProps = state => {
  const { 
        movieCredits, 
        fetchingMovieCredits, 
        movieCreditsFetched, 
        fetchMovieCreditsError,
      } = state.movieCreditsReducer;

  const { 
        movieDetails, 
        fetchingMovieDetails, 
        movieDetailsFetched, 
        fetchMovieDetailsError,
      } = state.movieDetailsReducer;

  const { apiConf } = state.apiConfReducer;

  return {
    movieCredits, 
    fetchingMovieCredits, 
    movieCreditsFetched, 
    fetchMovieCreditsError,
    movieDetails,
    fetchingMovieDetails,
    movieDetailsFetched,
    fetchMovieDetailsError,
    apiConf
  }
}

const mapDispatchToProps = dispatch => {
  return bindActionCreators({ fetchMovieDetailsAndCredits }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(MovieDetails);
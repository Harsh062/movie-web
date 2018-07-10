import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { fetchMovieDetailsAndCredits } from '../state/actions/authActions';
import { LoadingIndicator } from '../shared/LoadingIndicator';
import { MovieDetailPage } from '../components/MovieDetailPage';

 class MovieDetails extends Component {
   componentDidMount() {
     this.props.fetchMovieDetailsAndCredits(this.props.match.params.id);
   }

   getDirectors = (movieCredits) => {
    return movieCredits.crew.filter(c => c.job === 'Director');
   }

   getWriters = (movieCredits) => {
    return movieCredits.crew.filter(c => c.job === 'Writer');
   }

    render() {
      let imageUrl, directors, writers, cast;
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
      if(movieDetails) {
        imageUrl = apiConf.images.base_url + apiConf.images.poster_sizes[4] + movieDetails.backdrop_path;
      }
      if (movieCreditsFetched) {
        directors = this.getDirectors(movieCredits);
        writers = this.getWriters(movieCredits);
      }
      
      return  (
        <Fragment>
        {
          <LoadingIndicator busy={fetchingMovieCredits || fetchingMovieDetails} />
        }
        {
          movieCreditsFetched && 
          movieDetailsFetched && 
          <MovieDetailPage 
          movieDetails={movieDetails} 
          imageUrl={imageUrl} 
          directors={directors} 
          writers={writers}/>
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
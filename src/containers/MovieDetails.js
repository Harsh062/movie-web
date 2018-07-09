import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { fetchMovieCredits } from '../state/actions/authActions';
import { LoadingIndicator } from '../shared/LoadingIndicator';

 class MovieDetails extends Component {
   componentDidMount() {
     this.props.fetchMovieCredits(this.props.match.params.id);
   }
    render() {
      const { movieCredits, fetchingMovieCredits, movieCreditsFetched, fetchMovieCreditsError } = this.props;
      return  (
        <Fragment>
        <h1>Movie Details Component</h1>
        {
          <LoadingIndicator busy={fetchingMovieCredits} />
        }
        {
          movieCreditsFetched && <h1>Movie Credits Fetched Yo </h1>
        }
      </Fragment>
      )
    }
}

const mapStateToProps = state => {
  const { movieCredits, fetchingMovieCredits, movieCreditsFetched, fetchMovieCreditsError } = state.movieCreditsReducer;
  return {
    movieCredits, 
    fetchingMovieCredits, 
    movieCreditsFetched, 
    fetchMovieCreditsError
  }
}

const mapDispatchToProps = dispatch => {
  return bindActionCreators({ fetchMovieCredits }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(MovieDetails);
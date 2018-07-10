// IMPORT ACTION CONSTANTS

import * as actions from '../actions/actionTypes';


// INITIALIZE STATE

const initialState = {
    movieDetails: null,
    fetchingMovieDetails: true,
    movieDetailsFetched: false,
    fetchMovieDetailsError: null
};


// Movie Details Reducer

export const MovieDetailsReducer = (state = initialState, action) => {
    switch (action.type) {
        case actions.FETCH_MOVIE_DETAILS_PENDING:
            console.log('FETCH_MOVIE_DETAILS_PENDING');
            return {
                ...state,
                movieDetails: null,
                fetchingMovieDetails: true,
                movieDetailsFetched: false,
                fetchMovieDetailsError: null
            };
        case actions.FETCH_MOVIE_DETAILS_FULFILLED:
            console.log('FETCH_MOVIE_DETAILS_FULFILLED');
            return {
                ...state,
                movieDetails: action.payload,
                fetchingMovieDetails: false,
                movieDetailsFetched: true
            };
        case actions.FETCH_MOVIE_DETAILS_REJECTED:
            console.log('FETCH_MOVIE_DETAILS_REJECTED');
            return {
                ...state,
                fetchingMovieDetails: false,
                fetchMovieDetailsError: action.payload
            };
        default:
            return state;
    }
};


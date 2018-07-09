// IMPORT ACTION CONSTANTS

import * as actions from '../actions/actionTypes';


// INITIALIZE STATE

const initialState = {
    movieDetails: 'Default Session ID',
    fetchingMovieDetails: true,
    movieDetailsFetched: false,
    fetchMovieDetailsError: null
};


// Guest ID Reducer

export const MovieDetailsReducer = (state = initialState, action) => {
    switch (action.type) {
        case actions.FETCH_MOVIE_DETAILS_PENDING:
            console.log('FETCH_MOVIE_DETAILS_PENDING');
            return {
                ...state,
                movieDetails: action.payload,
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
                movieDetailsFetched: true,
                fetchMovieDetailsError: null
            };
        case actions.FETCH_MOVIE_DETAILS_REJECTED:
            console.log('FETCH_MOVIE_DETAILS_REJECTED');
            return {
                ...state,
                movieDetails: null,
                fetchingMovieDetails: false,
                movieDetailsFetched: false,
                fetchMovieDetailsError: action.payload
            };
        default:
            return state;
    }
};


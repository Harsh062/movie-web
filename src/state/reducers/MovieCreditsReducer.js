// IMPORT ACTION CONSTANTS

import * as actions from '../actions/actionTypes';


// INITIALIZE STATE

const initialState = {
    movieCredits: null,
    fetchingMovieCredits: true,
    movieCreditsFetched: false,
    fetchMovieCreditsError: null
};


// Guest ID Reducer

export const MovieCreditsReducer = (state = initialState, action) => {
    switch (action.type) {
        case actions.FETCH_MOVIE_CREDITS_PENDING:
            console.log('FETCH_MOVIE_CREDITS_PENDING');
            return {
                ...state,
                movieCredits: null,
                fetchingMovieCredits: true,
                movieCreditsFetched: false,
                fetchMovieCreditsError: null
            };
        case actions.FETCH_MOVIE_CREDITS_FULFILLED:
            console.log('FETCH_MOVIE_CREDITS_FULFILLED');
            return {
                ...state,
                movieCredits: action.payload,
                fetchingMovieCredits: false,
                movieCreditsFetched: true
            };
        case actions.FETCH_MOVIE_CREDITS_REJECTED:
            console.log('FETCH_MOVIE_CREDITS_REJECTED');
            return {
                ...state,
                fetchingMovieCredits: false,
                fetchMovieCreditsError: action.payload
            };
        default:
            return state;
    }
};


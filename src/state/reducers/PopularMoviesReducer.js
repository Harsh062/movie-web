// IMPORT ACTION CONSTANTS

import * as actions from '../actions/actionTypes';


// INITIALIZE STATE

const initialState = {
    popularMovies: null,
    fetchingPopularMovies: false,
    popularMoviesFetched: false,
    fetchPopularMoviesError: null
};


// Guest ID Reducer

export const PopularMoviesReducer = (state = initialState, action) => {
    switch (action.type) {
        case actions.FETCH_POPULAR_MOVIES_PENDING:
            console.log('FETCH_POPULAR_MOVIES_PENDING');
            return {
                ...state,
                popularMovies: null,
                fetchingPopularMovies: true,
                popularMoviesFetched: false,
                fetchPopularMoviesError: null
            };
        case actions.FETCH_POPULAR_MOVIES_FULFILLED:
            console.log('FETCH_POPULAR_MOVIES_FULFILLED');
            return {
                ...state,
                popularMovies: action.payload,
                fetchingPopularMovies: false,
                popularMoviesFetched: true,
                fetchPopularMoviesError: null
            };
        case actions.FETCH_POPULAR_MOVIES_REJECTED:
            console.log('FETCH_POPULAR_MOVIES_REJECTED');
            return {
                ...state,
                popularMovies: null,
                fetchingPopularMovies: false,
                popularMoviesFetched: false,
                fetchPopularMoviesError: action.payload
            };
        default:
            return state;
    }
};


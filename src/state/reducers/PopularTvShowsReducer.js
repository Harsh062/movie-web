// IMPORT ACTION CONSTANTS

import * as actions from '../actions/actionTypes';


// INITIALIZE STATE

const initialState = {
    popularTvShows: null,
    fetchingPopularTvShows: false,
    popularTvShowsFetched: false,
    fetchPopularTvShowsError: null
};


// Guest ID Reducer

export const PopularTvShowsReducer = (state = initialState, action) => {
    switch (action.type) {
        case actions.FETCH_POPULAR_MOVIES_PENDING:
            console.log('FETCH_POPULAR_MOVIES_PENDING');
            return {
                ...state,
                popularTvShows: null,
                fetchingPopularTvShows: true,
                popularTvShowsFetched: false,
                fetchPopularTvShowsError: null
            };
        case actions.FETCH_POPULAR_MOVIES_FULFILLED:
            console.log('FETCH_POPULAR_MOVIES_FULFILLED');
            return {
                ...state,
                popularTvShows: action.payload,
                fetchingPopularTvShows: false,
                popularTvShowsFetched: true,
                fetchPopularTvShowsError: null
            };
        case actions.FETCH_POPULAR_MOVIES_REJECTED:
            console.log('FETCH_POPULAR_MOVIES_REJECTED');
            return {
                ...state,
                popularTvShows: null,
                fetchingPopularTvShows: false,
                popularTvShowsFetched: false,
                fetchPopularTvShowsError: action.payload
            };
        default:
            return state;
    }
};


// IMPORT ACTION CONSTANTS

import * as actions from '../actions/actionTypes';


// INITIALIZE STATE

const initialState = {
    requestToken: null,
    fetchingRequestToken: false,
    requestTokenFetched: false,
    fetchRequestTokenError: null
};


// Request Token Reducer

export const RequestTokenReducer = (state = initialState, action) => {
    console.log('REQUEST_TOKEN: ', action);
    switch (action.type) {
        case actions.FETCH_REQUEST_TOKEN_PENDING:
            console.log('FETCH_REQUEST_TOKEN_PENDING');
            return {
                ...state,
                requestToken: null,
                fetchingRequestToken: true,
                requestTokenFetched: false,
                fetchRequestTokenError: null
            };
        case actions.FETCH_REQUEST_TOKEN_FULFILLED:
            console.log('FETCH_REQUEST_TOKEN_FULFILLED');
            return {
                ...state,
                requestToken: action.payload,
                fetchingRequestToken: false,
                requestTokenFetched: true,
                fetchRequestTokenError: null
            };
        case actions.FETCH_REQUEST_TOKEN_REJECTED:
            console.log('FETCH_REQUEST_TOKEN_REJECTED');
            return {
                ...state,
                requestToken: null,
                fetchingRequestToken: false,
                requestTokenFetched: false,
                fetchRequestTokenError: action.payload
            };
       
        default:
            return state;
    }
};


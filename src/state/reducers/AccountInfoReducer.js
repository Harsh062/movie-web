// IMPORT ACTION CONSTANTS

import * as actions from '../actions/actionTypes';

// Account Info Reducer

export const GuestSessionReducer = (state = {}, action) => {
    switch (action.type) {
        case actions.FETCH_USER_INFO_PENDING:
            console.log('FETCH_USER_INFO_PENDING');
            return {
                ...state,
                userinfo: null
            };
        case actions.FETCH_USER_INFO_FULFILLED:
            console.log('FETCH_USER_INFO_FULFILLED', action);
            return {
                ...state,
                userinfo: action.payload
            };
        case actions.FETCH_USER_INFO_REJECTED:
            console.log('FETCH_USER_INFO_REJECTED');
            return {
                ...state,
                userinfo: null
            };
        default:
            return state;
    }
};


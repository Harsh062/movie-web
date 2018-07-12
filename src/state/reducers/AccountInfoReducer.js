// IMPORT ACTION CONSTANTS

import * as actions from '../actions/actionTypes';

// Account Info Reducer

const initialState = {
    userinfo: null,
    fetchingUserInfo: false,
    userInfoFetched: false,
    userInfoFetchError: null
}

export const AccountInfoReducer = (state = initialState, action) => {
    switch (action.type) {
        case actions.FETCH_USER_INFO_PENDING:
            console.log('FETCH_USER_INFO_PENDING');
            return {
                ...state,
                userinfo: null,
                fetchingUserInfo: true,
                userInfoFetched: false,
                userInfoFetchError: null
            };
        case actions.FETCH_USER_INFO_FULFILLED:
            console.log('FETCH_USER_INFO_FULFILLED', action);
            return {
                ...state,
                userinfo: action.payload,
                fetchingUserInfo: false,
                userInfoFetched: true,
                userInfoFetchError: null
            };
        case actions.FETCH_USER_INFO_REJECTED:
            console.log('FETCH_USER_INFO_REJECTED');
            return {
                ...state,
                userinfo: null,
                fetchingUserInfo: false,
                userInfoFetched: false,
                userInfoFetchError: action.payload
            };
        default:
            return state;
    }
};


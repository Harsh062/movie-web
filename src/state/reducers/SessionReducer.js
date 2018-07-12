// IMPORT ACTION CONSTANTS

import * as actions from '../actions/actionTypes';


// INITIALIZE STATE

const initialState = {
    sessionId: null,
    fetchingSessionId: false,
    sessionIdFetched: false,
    fetchSessionIdError: null
};


// Guest ID Reducer

export const SessionReducer = (state = initialState, action) => {
    switch (action.type) {
        case actions.FETCH_SESSION_ID_PENDING:
            console.log('FETCH_SESSION_ID_PENDING');
            return {
                ...state,
                sessionId: null,
                fetchingSessionId: true,
                sessionIdFetched: false,
                fetchSessionIdError: null
            };
        case actions.FETCH_SESSION_ID_FULFILLED:
            console.log('FETCH_SESSION_ID_FULFILLED');
            return {
                ...state,
                sessionId: action.payload.session_id,
                fetchingSessionId: false,
                sessionIdFetched: true,
                fetchSessionIdError: null
            };
        case actions.FETCH_SESSION_ID_REJECTED:
            console.log('FETCH_SESSION_ID_REJECTED');
            return {
                ...state,
                sessionId: null,
                fetchingSessionId: false,
                sessionIdFetched: false,
                fetchSessionIdError: action.payload
            };
        case actions.LOGOUT:
            console.log('FETCH_SESSION_ID_REJECTED');
            return {
                ...state,
                sessionId: null,
                fetchingSessionId: false,
                sessionIdFetched: false,
                fetchSessionIdError: null
            };
        default:
            return state;
    }
};


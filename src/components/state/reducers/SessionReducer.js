// IMPORT ACTION CONSTANTS

import * as actions from '../actions/actionTypes';


// INITIALIZE STATE

const initialState = {
    sessionId: 'ession ID',
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
                sessionId: action.payload,
                fetchingSessionId: true,
                sessionIdFetched: false,
                fetchSessionIdError: null
            };
        case actions.FETCH_SESSION_ID_FULFILLED:
            console.log('FETCH_SESSION_ID_FULFILLED');
            return {
                ...state,
                sessionId: action.payload,
                fetchingSessionId: false,
                sessionIdFetched: true,
                fetchSessionIdError: null
            };
        case actions.FETCH_SESSION_ID_REJECTED:
            console.log('FETCH_SESSION_ID_REJECTED');
            return {
                ...state,
                sessionId: action.payload,
                fetchingSessionId: false,
                sessionIdFetched: false,
                fetchSessionIdError: action.payload
            };
        default:
            return state;
    }
};


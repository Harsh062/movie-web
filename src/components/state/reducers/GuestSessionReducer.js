// IMPORT ACTION CONSTANTS

import * as actions from '../actions/actionTypes';


// INITIALIZE STATE

const initialState = {
    sessionId: 'Default Session ID',
    fetchingGuestSessionId: true,
    fetchGuestSessionIdError: null
};


// Guest ID Reducer

export const GuestSessionReducer = (state = initialState, action) => {
    switch (action.type) {
        case actions.FETCH_SESSION_ID_PENDING:
            console.log('FETCH_SESSION_ID_PENDING');
            return {
                ...state,
                sessionId: action.payload,
                fetchingGuestSessionId: true,
                fetchGuestSessionIdError: null
            };
        case actions.FETCH_SESSION_ID_FULFILLED:
            console.log('FETCH_SESSION_ID_FULFILLED');
            return {
                ...state,
                sessionId: action.payload,
                fetchingGuestSessionId: false,
                fetchGuestSessionIdError: null
            };
        case actions.FETCH_SESSION_ID_REJECTED:
            console.log('FETCH_SESSION_ID_REJECTED');
            return {
                ...state,
                sessionId: action.payload,
                fetchingGuestSessionId: false,
                fetchGuestSessionIdError: action.payload
            };
        default:
            return state;
    }
};


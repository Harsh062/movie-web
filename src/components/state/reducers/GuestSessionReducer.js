// IMPORT ACTION CONSTANTS

import * as actions from '../actions/actionTypes';


// INITIALIZE STATE

const initialState = {
    sessionId: 'Default Session ID',
    inProgress: true,
    error: null
};


// Guest ID Reducer

export const GuestSessionReducer = (state = initialState, action) => {
    console.log('FETCH_SESSION: ', action);
    switch (action.type) {
        case actions.FETCH_SESSION_ID_PENDING:
            console.log('FETCH_SESSION_ID_PENDING');
            return {
                ...state,
                sessionId: action.payload,
                inProgress: true,
                error: null
            };
        case actions.FETCH_SESSION_ID_FULFILLED:
            console.log('FETCH_SESSION_ID_FULFILLED');
            return {
                ...state,
                sessionId: action.payload,
                inProgress: false,
                error: null
            };
        case actions.FETCH_SESSION_ID_REJECTED:
            console.log('FETCH_SESSION_ID_REJECTED');
            return {
                ...state,
                sessionId: action.payload,
                inProgress: false,
                error: action.payload
            };
        default:
            return state;
    }
};


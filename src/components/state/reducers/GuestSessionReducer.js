// IMPORT ACTION CONSTANTS

import * as actions from '../actions/actionTypes';


// INITIALIZE STATE

const initialState = {
    guestSessionId: 'Default Session ID',
    fetchingGuestSessionId: true,
    guestSessionIdFetched: false,
    fetchGuestSessionIdError: null
};


// Guest ID Reducer

export const GuestSessionReducer = (state = initialState, action) => {
    switch (action.type) {
        case actions.FETCH_GUEST_SESSION_ID_PENDING:
            console.log('FETCH_GUEST_SESSION_ID_PENDING');
            return {
                ...state,
                guestSessionId: action.payload,
                fetchingGuestSessionId: true,
                guestSessionIdFetched: false,
                fetchGuestSessionIdError: null
            };
        case actions.FETCH_GUEST_SESSION_ID_FULFILLED:
            console.log('FETCH_GUEST_SESSION_ID_FULFILLED');
            return {
                ...state,
                guestSessionId: action.payload,
                fetchingGuestSessionId: false,
                guestSessionIdFetched: true,
                fetchGuestSessionIdError: null
            };
        case actions.FETCH_GUEST_SESSION_ID_REJECTED:
            console.log('FETCH_GUEST_SESSION_ID_REJECTED');
            return {
                ...state,
                guestSessionId: action.payload,
                fetchingGuestSessionId: false,
                guestSessionIdFetched: false,
                fetchGuestSessionIdError: action.payload
            };
        default:
            return state;
    }
};


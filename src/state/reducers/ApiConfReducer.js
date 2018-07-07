// IMPORT ACTION CONSTANTS

import * as actions from '../actions/actionTypes';


// INITIALIZE STATE

const initialState = {
    apiConf: null,
    fetchingApiConf: false,
    apiConfFetched: false,
    fetchApiConfError: null
};


// Guest ID Reducer

export const ApiConfReducer = (state = initialState, action) => {
    switch (action.type) {
        case actions.FETCH_API_CONFIGURATION_PENDING:
            console.log('FETCH_API_CONFIGURATION_PENDING');
            return {
                ...state,
                apiConf: null,
                fetchingApiConf: true,
                apiConfFetched: false,
                fetchApiConfError: null
            };
        case actions.FETCH_API_CONFIGURATION_FULFILLED:
            console.log('FETCH_API_CONFIGURATION_FULFILLED');
            return {
                ...state,
                apiConf: action.payload,
                fetchingApiConf: false,
                apiConfFetched: true,
                fetchApiConfError: null
            };
        case actions.FETCH_API_CONFIGURATION_REJECTED:
            console.log('FETCH_API_CONFIGURATION_REJECTED');
            return {
                ...state,
                apiConf: null,
                fetchingApiConf: false,
                apiConfFetched: false,
                fetchApiConfError: action.payload
            };
        default:
            return state;
    }
};


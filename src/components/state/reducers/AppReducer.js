import { combineReducers } from 'redux';

import { GuestSessionReducer } from './GuestSessionReducer';
import { RequestTokenReducer } from './RequestTokenReducer';

export const AppReducer = combineReducers({
    guestSessionReducer: GuestSessionReducer,
    requestTokenReducer: RequestTokenReducer
});
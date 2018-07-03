import { combineReducers } from 'redux';

import { GuestSessionReducer } from './GuestSessionReducer';
import { RequestTokenReducer } from './RequestTokenReducer';
import { SessionReducer } from './SessionReducer';

export const AppReducer = combineReducers({
    guestSessionReducer: GuestSessionReducer,
    requestTokenReducer: RequestTokenReducer,
    sessionReducer: SessionReducer
});
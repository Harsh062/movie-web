// IMPORT SERVICES
import { fetchSessionIdService, fetchRequestTokenService } from '../../services/AuthService';
import * as actions from './actionTypes';


// ACTIONS GENERATORS

const fetchSessionId = () => ({
    type: actions.FETCH_SESSION_ID,
    payload: fetchSessionIdService()
});

const fetchRequestToken = () => ({
    type: actions.FETCH_REQUEST_TOKEN,
    payload: fetchRequestTokenService()
});



// EXPORT ACTIONS

export { fetchSessionId, fetchRequestToken };
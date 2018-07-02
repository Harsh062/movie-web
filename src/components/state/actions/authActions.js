// IMPORT SERVICES
import { fetchGuestSessionIdService, fetchRequestTokenService } from '../../services/AuthService';
import * as actions from './actionTypes';


// ACTIONS GENERATORS

const fetchGuestSessionId = () => ({
    type: actions.FETCH_SESSION_ID,
    payload: fetchGuestSessionIdService()
});

const fetchRequestToken = () => ({
    type: actions.FETCH_REQUEST_TOKEN,
    payload: fetchRequestTokenService()
});



// EXPORT ACTIONS

export { fetchGuestSessionId, fetchRequestToken };
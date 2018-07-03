// IMPORT SERVICES
import { fetchGuestSessionIdService, fetchRequestTokenService, fetchSessionIdService } from '../../services/AuthService';
import * as actions from './actionTypes';


// ACTIONS GENERATORS

const fetchGuestSessionId = () => ({
    type: actions.FETCH_GUEST_SESSION_ID,
    payload: fetchGuestSessionIdService()
});

const fetchRequestToken = () => ({
    type: actions.FETCH_REQUEST_TOKEN,
    payload: fetchRequestTokenService()
});

const fetchSessionId = (req_token) => ({
    type: actions.FETCH_SESSION_ID,
    payload: fetchSessionIdService(req_token)
});

// EXPORT ACTIONS

export { fetchGuestSessionId, fetchRequestToken, fetchSessionId };
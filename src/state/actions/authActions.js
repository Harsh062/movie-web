// IMPORT SERVICES
import { 
        fetchGuestSessionIdService, 
        fetchRequestTokenService, 
        fetchSessionIdService, 
        fetchUserInfoService, 
        fetchAPIConfigurationService, 
        fetchPopularMoviesService,
        fetchPopularTvShowsService
    } from '../../services/AuthService';
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

const fetchUserInfo = (session_id) => ({
    type: actions.FETCH_USER_INFO,
    payload: fetchUserInfoService(session_id)
});

const fetchAPIConfiguration = () => ({
    type: actions.FETCH_API_CONFIGURATION,
    payload: fetchAPIConfigurationService()
});

const fetchPopularMovies = () => ({
    type: actions.FETCH_POPULAR_MOVIES,
    payload: fetchPopularMoviesService()
});

const fetchPopularTvShows = () => ({
    type: actions.FETCH_POPULAR_TVSHOWS,
    payload: fetchPopularTvShowsService()
});

const fetchPopularMoviesAndTvShows = () => {
    return dispatch => {
        return dispatch({
            type: actions.FETCH_POPULAR_MOVIES_AND_TVSHOWS,
            payload: Promise.all([
                dispatch(fetchPopularMovies()),
                dispatch(fetchPopularTvShows())
            ])
        })
    }
}

const fetchUserInfoAndConfigurations = session_id => {
    return dispatch => {
        return dispatch({
            type: actions.FETCH_USERINFO_AND_CONFIGURATION,
            payload: Promise.all([
                dispatch(fetchUserInfo(session_id))
            ])
        })
    }
}

const fetchSessionId = (req_token) => {
    return dispatch => {
        return dispatch({
            type: actions.FETCH_SESSION_ID,
            payload: fetchSessionIdService(req_token)
        }).then((res) => {
            dispatch(fetchUserInfoAndConfigurations(res.value.session_id));
        });
    };
}


// EXPORT ACTIONS

export { 
         fetchGuestSessionId, 
         fetchRequestToken, 
         fetchSessionId, 
         fetchUserInfo, 
         fetchAPIConfiguration, 
         fetchPopularMoviesAndTvShows 
        };
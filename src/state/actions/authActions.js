// IMPORT SERVICES
import { 
        fetchGuestSessionIdService, 
        fetchRequestTokenService, 
        fetchSessionIdService, 
        fetchUserInfoService, 
        fetchAPIConfigurationService, 
        fetchPopularMoviesService,
        fetchPopularTvShowsService,
        fetchMovieCreditsService,
        fetchMovieDetailsService
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

const logout = () => ({
    type: actions.LOGOUT
})

const fetchSessionId = (req_token) => {
    return dispatch => {
        return dispatch({
            type: actions.FETCH_SESSION_ID,
            payload: fetchSessionIdService(req_token)
        }).then((res) => {
            dispatch(fetchUserInfo(res.value.session_id));
        });
    };
}

const fetchMovieCredits = (movie_id) => ({
    type: actions.FETCH_MOVIE_CREDITS,
    payload: fetchMovieCreditsService(movie_id)
});

const fetchMovieDetails = (movie_id) => ({
    type: actions.FETCH_MOVIE_DETAILS,
    payload: fetchMovieDetailsService(movie_id)
});

const fetchMovieDetailsAndCredits = (movie_id) => {
    return dispatch => {
        return dispatch({
            type: actions.FETCH_MOVIES_CREDITS_AND_DETAILS,
            payload: Promise.all([
                dispatch(fetchMovieCredits(movie_id)),
                dispatch(fetchMovieDetails(movie_id))
            ])
        })
    }
}

// EXPORT ACTIONS

export { 
         fetchGuestSessionId, 
         fetchRequestToken, 
         fetchSessionId, 
         fetchUserInfo, 
         fetchAPIConfiguration, 
         fetchPopularMoviesAndTvShows,
         fetchMovieDetailsAndCredits,
         logout
        };
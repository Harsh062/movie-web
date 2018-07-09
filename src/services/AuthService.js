import axios from 'axios';

const API_BASE_URL = 'https://api.themoviedb.org/3';
const API_KEY = '5dd13294cce52c22e210bbcb39cdf6fa';

export const fetchGuestSessionIdService = () => {
    const url = `${API_BASE_URL}/authentication/guest_session/new?api_key=${API_KEY}`;
    return new Promise((resolve, reject) => {
        axios
            .get(url)
            .then(response => {
                console.log(response.data.guest_session_id);
                return resolve(response.data.guest_session_id);
            })
            .catch(error => {
                return reject(error);
            });
    });
}

export const fetchRequestTokenService = () => {
    const url = `${API_BASE_URL}/authentication/token/new?api_key=${API_KEY}`;
    return new Promise((resolve, reject) => {
        axios
            .get(url)
            .then(response => {
                console.log(response.data.request_token);
                return resolve(response.data.request_token);
            })
            .catch(error => {
                return reject(error);
            });
    });
}

export const fetchSessionIdService = (req_token) => {
    return new Promise((resolve, reject) => {
        axios.get(`${API_BASE_URL}/configuration?api_key=${API_KEY}`)
        .then(response => {
            console.log(response.data);
            return resolve(response.data);
        })
        .catch(error => {
            return reject(error);
        })
    });
    

}

export const fetchUserInfoService = (session_id) => {
    return new Promise((resolve, reject) => {
        axios.get(`${API_BASE_URL}/account?api_key=${API_KEY}&session_id=${session_id}`)
        .then(response => {
            console.log(`user info response [service]: ${response.data}`);
            return resolve(response.data);
        })
        .catch(error => {
            return reject(error);
        })
    });
}

export const fetchAPIConfigurationService = () => {
    return new Promise((resolve, reject) => {
        axios.get(`${API_BASE_URL}/configuration?api_key=${API_KEY}`)
        .then(response => {
            console.log(`api conf [service]: ${response.data}`);
            return resolve(response.data);
        })
        .catch(error => {
            return reject(error);
        })
    });
}

export const fetchPopularMoviesService = () => {
    return new Promise((resolve, reject) => {
        axios.get(`${API_BASE_URL}/movie/upcoming?api_key=${API_KEY}&language=en-US&page=1`)
        .then(response => {
            console.log(`Popular Movies [service]: ${response.data}`);
            return resolve(response.data);
        })
        .catch(error => {
            return reject(error);
        })
    });
}

export const fetchPopularTvShowsService = () => {
    return new Promise((resolve, reject) => {
        axios.get(`${API_BASE_URL}/tv/popular?api_key=${API_KEY}&language=en-US&page=1`)
        .then(response => {
            console.log(`Popular TV Shows [service]: ${response.data}`);
            return resolve(response.data);
        })
        .catch(error => {
            return reject(error);
        })
    });
}

export const fetchMovieCreditsService = (movie_id) => {
    return new Promise((resolve, reject) => {
        axios.get(`${API_BASE_URL}/movie/${movie_id}/credits?api_key=${API_KEY}`)
        .then(response => {
            console.log(`Movie Credits [service]: ${response.data}`);
            return resolve(response.data);
        })
        .catch(error => {
            return reject(error);
        })
    });
}

export const fetchMovieDetailsService = (movie_id) => {
    return new Promise((resolve, reject) => {
        axios.get(`${API_BASE_URL}/movie/${movie_id}?api_key=${API_KEY}&language=en-US`)
        .then(response => {
            console.log(`Movie Details [service]: ${response.data}`);
            return resolve(response.data);
        })
        .catch(error => {
            return reject(error);
        })
    });
}

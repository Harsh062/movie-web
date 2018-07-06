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
        axios.get(`${API_BASE_URL}/authentication/session/new?api_key=${API_KEY}&request_token=${req_token}`)
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
            console.log(response.data);
            return resolve(response.data);
        })
        .catch(error => {
            return reject(error);
        })
    });
    

}
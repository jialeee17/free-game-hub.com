import axios from 'axios';

// API Document: https://www.freetogame.com/api-doc

const API_URL = 'https://www.freetogame.com/api';

export default {
    getGameList() {
        return axios.get(`${API_URL}/games`);
    },
}
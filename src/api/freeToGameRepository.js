import axios from 'axios';

// API Document: https://www.freetogame.com/api-doc

/* -------------------------------------------------------------------------- */
/*                                 Rate Limits                                */
/* -------------------------------------------------------------------------- */
// Please avoid doing more than 4 requests per second.

/* -------------------------------------------------------------------------- */
/*                                  Responses                                 */
/* -------------------------------------------------------------------------- */
// 200: Success
// 404: Object not found: Game or endpoint not found
// 500: Something wrong on our end (unexpected server errors)

const API_URL = 'https://www.freetogame.com/api';

export default {
    getGameList(params) {
        return axios.get(`${API_URL}/games`, {
                params: params
            })
            .then(response => response)
            .catch(error => error);
    },

    filterGameList(params) {
        return axios.get(`${API_URL}/filter`, {
                params: params
            })
            .then(response => response)
            .catch(error => error);
    },
}
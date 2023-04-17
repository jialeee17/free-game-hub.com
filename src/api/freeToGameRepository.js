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
    getGameList: async (params = {}) => {

        try {

            const response = await axios.get(`${API_URL}/games`, {
                        params: params
                    });

            return response;

        } catch (error) {

            console.error(error);

        }

    },

    filterGameList: async (params = {}) => {

        try {

            const response = await axios.get(`${API_URL}/filter`, {
                params: params
            });

            return response;

        } catch (error) {

            console.error(error);

        }

    },
}
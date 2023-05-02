import api from './api.js';
import {
    updateToken,
    logout
} from '../../features/userSlice.js';

const refreshToken = async (store) => {
    try {
        const response = await api.post('/user/refresh-token');

        // Update the store with the new access token
        store.dispatch(updateToken({
            authToken: response.data.token,
        }));

        return response.data.token;
    } catch (error) {
        console.error('Error refreshing token:', error);
        // End user session due to invalid auth & refresh token
        store.dispatch(logout());
        return null;
    }
};

export default refreshToken;

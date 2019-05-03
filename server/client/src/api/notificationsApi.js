import axios from 'axios';
import getToken from '../utils/getToken';

const token = getToken();

const notificationsApi = {
            loadNotifications: () => axios.get('/api/notifications').then(response => response.data)
};

export default notificationsApi;

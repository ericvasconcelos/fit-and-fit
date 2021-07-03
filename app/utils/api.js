import axios from 'axios';

const config = {
  crossDomain: true,
  responseType: 'json',
  headers: {
    'Content-Type': 'application/json',
  },
};

config.baseURL = 'http://0.0.0.0:3001/';

const api = axios.create(config);

api.CancelToken = axios.CancelToken;
api.isCancel = axios.isCancel;

export default api;

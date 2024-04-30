import axios from 'axios';

// TODO: replace on current API_URL
export const API_URL = 'http://localhost:1337';

export const $api = axios.create({
  baseURL: `${API_URL}/api`,
});

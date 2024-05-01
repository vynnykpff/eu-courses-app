import axios from 'axios';

// TODO: replace on current API_URL
export const API_URL = 'https://cms.courses.e-u.edu.ua';

export const $api = axios.create({
  baseURL: `${API_URL}/api`,
});

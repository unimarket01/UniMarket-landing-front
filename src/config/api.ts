import axios from 'axios';

const apiClient = axios.create({
  baseURL: 'http://localhost:8080/api/users', 
  timeout: 10000, 
});

apiClient.interceptors.response.use(
  (response) => response,
  (error) => {
    console.error('Error en la llamada API:', error.response?.data || error.message);
    return Promise.reject(error);
  }
);

export default apiClient;
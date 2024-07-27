import axios from 'axios';

const apiClient = axios.create({
  baseURL: 'https://api.rawg.io/api',
  
  params: {
    key: '69e5376a739c491d842bc4290cfccf32',
  },
});

export default apiClient;

// Example API util file
import axios from 'axios';

const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL
});

export const fetchProducts = async () => {
  try {
    const response = await api.get('/products');
    return response.data.products;
  } catch (error) {
    console.error('Error fetching products', error);
    throw error;
  }
};

export default api;

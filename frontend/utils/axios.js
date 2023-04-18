import axios from 'axios';

const getRequest = async (endpoint) => {
  const { data } = await axios.get(`${import.meta.env.VITE_ENDPOINT}${endpoint}`);
  return data;
};

export default getRequest;

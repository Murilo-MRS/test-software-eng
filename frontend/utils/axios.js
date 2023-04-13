import axios from 'axios';

const getRequest = async (endpoint) => {
  const { data } = await axios.get(endpoint);
  return data;
};

export default getRequest;

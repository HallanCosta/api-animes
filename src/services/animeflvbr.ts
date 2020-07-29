import axios from 'axios';

const animesRequest = axios.create({ 
  baseURL: 'https://animeflvbr.com'
}); 

export default animesRequest;
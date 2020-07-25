import axios from 'axios';

const animesRequest = axios.create({
  baseURL: 'https://animesorion.vip'
});

export default animesRequest;
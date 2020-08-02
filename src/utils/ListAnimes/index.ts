import animesRequest from '../../services/animeflvbr';
import cheerio from 'cheerio';
import animesSection from '../animesSection';
import paginationAnimes from '../paginationAnimes';

async function listAnimes() {
  const urlParam = '/lista';
  const animes = await animesSection(urlParam, 0);
  
  const body = await animesRequest.get(urlParam);
  const paginationNumbers = await paginationAnimes(body.data, 5);

  return {
    info: "LISTA DE ANIMES",
    idAnimes: animes.idAnimes,
    imagesAttributes: animes.imagesAttributes,
    title: animes.title,
    paginationNumbers
  };
}

export default listAnimes;
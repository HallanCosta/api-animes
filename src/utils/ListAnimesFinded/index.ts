import animesSection from '../animesSection';
import animesRequest from '../../services/animeflvbr';
import cheerio from 'cheerio';
import paginationAnimes from '../paginationAnimes';

async function listAnimesFinded(search: string) {
  const animes = await animesSection(search, 0);
  
  const body = await animesRequest.get(search);
  const paginationNumbers = await paginationAnimes(body.data);

  return {
    info: "ANIMES ENCONTRADOS",
    idAnimes: animes.idAnimes,
    imagesAttributes: animes.imagesAttributes,
    title: animes.title,
    paginationNumbers
  };
}

export default listAnimesFinded;
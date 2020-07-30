import animesRequest from '../../services/animeflvbr';
import cheerio from 'cheerio';
import animesSection from './animesSection';

async function animesCommons() {
  const animes = await animesSection('/', 0);
  
  return {
    info: "POPULARES",
    idAnimes: animes.idAnimes,
    imagesAttributes: animes.imagesAttributes,
    title: animes.title
  };
}

async function lastEntriesEpisodes(page: number) {
  const body = page == 1 ? await animesRequest.get('/') : await animesRequest.get(`page/${page}`);

  const $ = cheerio.load(body.data);

  const idEpisode: string[] = [];
  const imagesAttributes: object[] = [];
  const datas: string[] = [];
  const episodesNumbers: string[] = [];
  const episodesTitles: string[] = [];
  const paginationNumbers: string[] = [];

  $('.postEP').each(function(i: number, element) {
    idEpisode[i] = $(element).find('a')[0].attribs.href.split('/')[4];
  
    imagesAttributes[i] = {
      src: $(element).find('img')[0].attribs.src,
      alt: $(element).find('img')[0].attribs.alt,
      title: $(element).find('img')[0].attribs.title
    };

    datas[i] = $(element).find('.info').find('.data').text();
      
    episodesNumbers[i] = $(element).find('.info').find('.Ep').text();
    
    episodesTitles[i] = $(element).find('.info').find('.title').text();
  });

  $('.pagination').find('a').each(function(i: number, element) {
    paginationNumbers[i] = $(element)[0].attribs.href.split('/')[4];
  });

  return {
    info: "ÚLTIMOS LANÇAMENTOS",
    idEpisode,
    imagesAttributes,
    datas,
    episodesNumbers,
    episodesTitles,
    paginationNumbers
  }; 
}

async function animesList() {
  const animes = await animesSection('/', 2);
  
  return {
    info: "LISTA DE ANIMES",
    idAnimes: animes.idAnimes,
    imagesAttributes: animes.imagesAttributes,
    title: animes.title
  };
}

export { animesCommons, lastEntriesEpisodes, animesList };
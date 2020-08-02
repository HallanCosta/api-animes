import animesRequest from '../../services/animeflvbr';
import cheerio from 'cheerio';

async function listEpisodeAnime(idAnime: string) {
  const body = await animesRequest.get(`/anime/${idAnime}`);
  
  const $ = cheerio.load(body.data);

  const animeName: string = $('.breadcrumbList').find('h1').text();
  const thumb: string = $('.thumb').find('img')[0].attribs.src;
  const synopsis: string = $('.sinopse').text().trim();
  const information: string[] = [];
  const idEpisode: string[] = [];

  $('.infoCP').find('span').each(function(i: number, element) {
    information[i] = $(element).text().split(':')[1];
  });

  const genre: any = [];
  $('.infoCP').find('span').find('a').each(function(i: number, element) {
    genre[i] = $(element).text();
  });
  const genreSerialized = genre.map((gen:any) => `${gen}, `);
  const animesInformation: object = {
    format: information[0],
    genre: genreSerialized,
    typeEpisode: information[2],
    episode: information[3],
    movies: information[4],
    ovas: information[5],
    status: information[6],
    launchDay: information[7],
    year: information[8],
  };

  $('.listEP').find('li').each(function(i: number, element) {
    idEpisode[i] = $(element).find('a')[0].attribs.href.split('/')[4];
  });

  return {
    animeName,
    thumb,
    synopsis,
    animesInformation,
    idEpisode
  };
}

export default listEpisodeAnime;
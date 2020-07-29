import animesRequest from '../../services/animeflvbr';
import cheerio from 'cheerio';

export default async function(idEpisode: string) {
  const body = await animesRequest.get(`/video/${idEpisode}`);
  const text: string = body.data;
  const regExFileWebsite = /file:.+/g;

  if (!regExFileWebsite.test(text)) {
    return {
      message: "There was a problem requesting data on the site!",
      status: 404
    }
  }

  const regExFileFilter = /file:/g;
  const match1 = text.match(regExFileWebsite)![0];
  const match2 = text.match(regExFileWebsite)![1];
  const fileSD = match1.split(regExFileFilter);
  const fileHD = match2.split(regExFileFilter);

  return {
    sd: fileSD[1],
    hd: fileHD[1]
  }
}
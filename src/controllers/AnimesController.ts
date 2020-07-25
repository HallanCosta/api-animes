import { Request, Response } from 'express';
import cheerio from 'cheerio';
import animesRequest from '../services/animesorion';

class AnimesController {

  constructor() {
    let linkStreamingVideo: string = ''; 
  }

  async lastReleases(request: Request, response: Response) {
    const body = await animesRequest.get('/');

    const $ = cheerio.load(body.data);

    const idEpisode: string[] = [];
    const animesImages: string[] = [];
    const animesNames: string[] = [];
    const episodesNumber: string[] = [];
    const episodesTitle: string[] = [];

    $('.episodioBox').each(function(i: number, element) {
      idEpisode[i] = $(element).find('a')[0].attribs.href.split('/')[4];
      animesImages[i] = $(element).find('img')[0].attribs['data-lazy-src'];
      animesNames[i] = $(element).find('.infos').find('.titlePost').text();
      episodesNumber[i] = $(element).find('.infos').find('.flex').find('h3').text();
      episodesTitle[i] = $(element).find('.infos').find('.flex').find('span').text();
    });

    return response.json({
      info: "Últimos lançamentos",
      idEpisode: idEpisode,
      animesImages: animesImages,
      animesNames: animesNames,
      episodesNumber: episodesNumber,
      episodesTitle: episodesTitle,
    })
  }
  

  async lastReleasesCreateVideo(request: Request, response: Response) {
    const { idEpisode } = request.query;

    const body = await animesRequest.get(`/episodio/${idEpisode}`);

    const $ = cheerio.load(body.data);
    const iframe1 = $('#player-1').find('iframe')[0].attribs['data-lazy-src'];
    const iframe2 = $('#player-2').find('iframe')[0].attribs['data-lazy-src'];
    const iframe3 = $('#player-3').find('iframe')[0].attribs['data-lazy-src'];
    const video = $('link')[6].attribs.href;

    return response.json({
      iframe: {
        player1: iframe1,
        player2: iframe2,
        player3: iframe3,
      },
      video: video
    });
  }


}

export default AnimesController;


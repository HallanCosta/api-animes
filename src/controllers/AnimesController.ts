import { Request, Response } from 'express';
import cheerio from 'cheerio';
import animesRequest from '../services/animeflvbr';
import animesLastEntries from '../utils/animesLastEntries';
import episodeLastEntries from '../utils/episodeLastEntries';

class AnimesController {

  async listAnimesLastEntries(request: Request, response: Response) {
    const animes = await animesLastEntries();

    return response.json({
      info: "Últimos lançamentos",
      idEpisode: animes.idEpisode,
      animesImages: animes.animesImages,
      animesNames: animes.animesNames,
      episodesNumber: animes.episodesNumber,
      episodesTitle: animes.episodesTitle,
    })
  }
  

  async listEpisodeLastEntries(request: Request, response: Response) {
    const { idEpisode } = request.query;

    const episode = await episodeLastEntries(idEpisode);

    return response.json({
      iframe: {
        player1: episode.iframe1,
        player2: episode.iframe2,
        player3: episode.iframe3,
      },
      video: episode.video
    });

  }


}

export default AnimesController;


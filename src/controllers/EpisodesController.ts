import { Request, Response } from 'express';
import cheerio from 'cheerio';
import watchEpisode from '../utils/WatchEpisodeAnime';

class EpisodesController {
  async show(request: Request, response: Response) {
    const { idEpisode } = request.params;
    const episode =  await watchEpisode(idEpisode);

    return response.json(episode);
  }
}

export default EpisodesController;
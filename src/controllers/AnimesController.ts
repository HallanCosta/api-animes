import { Request, Response } from 'express';
import cheerio from 'cheerio';
import { animesCommons, lastEntriesEpisodes, animesList } from '../utils/Home';

class AnimesController {

  async index(request: Request, response: Response) {
    const { page = 1 } = request.body;

    const animes = await animesCommons();
    const episodes = await lastEntriesEpisodes(page)
    const listAnimes = await animesList()

    return response.json({
      animes,
      episodes,
      listAnimes
    });
  }
  

}

export default AnimesController;


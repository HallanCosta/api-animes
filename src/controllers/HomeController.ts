import { Request, Response } from 'express';
import cheerio from 'cheerio';
import { animesCommons, lastEntriesEpisodes, animesList } from '../utils/Home';

class HomeController {

  async index(request: Request, response: Response) {
    const { page = 1 } = request.params;

    const animes = await animesCommons();
    const episodes = await lastEntriesEpisodes(Number(page));
    const listAnimes = await animesList();

    return response.json({
      animes,
      episodes,
      listAnimes
    });
  }

}

export default HomeController;


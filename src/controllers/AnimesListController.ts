import { Request, Response } from 'express';
import cheerio from 'cheerio';
import listAllAnimes from '../utils/ListAnimes';

class AnimesListController {

  async index(request: Request, response: Response) {
    const animesList = await listAllAnimes();

    return response.json(animesList);
  }


}

export default AnimesListController;
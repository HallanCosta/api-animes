import { Request, Response } from 'express';
import cheerio from 'cheerio';
import listAllAnimes from '../utils/ListAnimes';

class AnimesListController {

  async index(request: Request, response: Response) {
    const { page = 1 } = request.params;
    
    const animesList = await listAllAnimes(Number(page));

    return response.json(animesList);
  }


}

export default AnimesListController;
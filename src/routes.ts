import express from 'express';
import HomeController from './controllers/HomeController';
import EpisodesController from './controllers/EpisodesController';
import AnimesListController from './controllers/AnimesListController';
import AnimesFindedController from './controllers/AnimesFindedController';

const routes = express.Router();

const homeController = new HomeController;
const episodesController = new EpisodesController;
const animesListController = new AnimesListController;
const animesFindedController = new AnimesFindedController;

routes.get('/', homeController.index);
routes.get('/page/:page', homeController.index);

routes.get('/anime/:idAnime', episodesController.index);
routes.get('/video/:idEpisode', episodesController.show);

routes.get('/lista', animesListController.index);
routes.get('/lista/page/:page', animesListController.index);

routes.get('/search', animesFindedController.index);
routes.get('/search/page/:page', animesFindedController.index);

export default routes;
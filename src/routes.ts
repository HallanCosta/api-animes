import express from 'express';
import HomeController from './controllers/HomeController';
import EpisodesController from './controllers/EpisodesController';
import AnimesListController from './controllers/AnimesListController';

const routes = express.Router();

const homeController = new HomeController;
const episodesController = new EpisodesController;
const animesListController = new AnimesListController;

routes.get('/', homeController.index);
routes.get('/page/:page', homeController.index);

routes.get('/video/:idEpisode', episodesController.show);

routes.get('/lista', animesListController.index);

export default routes;
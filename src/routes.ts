import express from 'express';
import AnimesController from './controllers/AnimesController';
import EpisodesController from './controllers/EpisodesController';

const routes = express.Router();

const animesController = new AnimesController;
const episodesController = new EpisodesController;

routes.get('/', animesController.index);
routes.get('/page/:page', animesController.index);
routes.get('/page/:page', animesController.index);

routes.get('/video/:idEpisode', episodesController.show);

export default routes;
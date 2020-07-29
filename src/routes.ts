import express from 'express';
import AnimesController from './controllers/AnimesController';

const routes = express.Router();

const animesController = new AnimesController;

routes.get('/', animesController.listAnimesLastEntries);
routes.get('/episodio', animesController.listEpisodeLastEntries);

export default routes;
import express from 'express';
import AnimesController from './controllers/AnimesController';

const routes = express.Router();

const animesController = new AnimesController;

routes.get('/', animesController.lastReleases);
routes.get('/episodio', animesController.lastReleasesCreateVideo);

export default routes;
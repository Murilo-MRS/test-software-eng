import { Router } from 'express';
import webScrapperRoutes from './webScrapper.routes';

const routes = Router();

routes.use('/products', webScrapperRoutes);

export default routes;

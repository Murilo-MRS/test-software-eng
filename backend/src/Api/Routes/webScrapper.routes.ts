import { Request, Response, Router } from 'express';
import WebScrapperController from '../Controllers/WebScrapperController';
import WebScrapperService from '../Services/WebScrapperService';
import MercadoLivreScrapper from '../Models/MercadoLivreScrapper';
import BuscapeScrapper from '../Models/BuscapeScrapper';
import ProductModel from '../Models/ProductModel';

const routes = Router();

const buscapeScraper = new BuscapeScrapper();
const mercadoLivreScraper = new MercadoLivreScrapper();
const productModel = new ProductModel();
const webScraperService = new WebScrapperService(mercadoLivreScraper, buscapeScraper, productModel);
const webScraperController = new WebScrapperController(webScraperService);

routes.get(
  '/',
  (req: Request, res: Response) => webScraperController.getWebScrapperData(req, res),
);

routes.get(
  '/database',
  (req: Request, res: Response) => webScraperController.getDataDb(req, res),
);

export default routes;

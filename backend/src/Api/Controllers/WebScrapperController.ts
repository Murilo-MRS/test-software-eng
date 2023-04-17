import { Request, Response } from 'express';
import IWebScrapperService from '../../Interfaces/IWebScrapperService';

class WebScrapperController {
  private _service: IWebScrapperService;

  constructor(service: IWebScrapperService) {
    this._service = service;
  }

  public async getWebScrapperData(req: Request, res: Response) {
    const { q } = req.query;

    if (!q) {
      return res.status(400).send('Missing query parameter "q"');
    }

    const products = await this._service.getProducts(q.toString());

    res.status(200).json(products);
  }

  public async getDataDb(req: Request, res: Response) {
    const { website } = req.query;

    const products = await this._service.getAllFromDb(website as string);

    res.status(200).json(products);
  }
}

export default WebScrapperController;

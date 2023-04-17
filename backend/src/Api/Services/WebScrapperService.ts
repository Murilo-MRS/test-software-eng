import Product from '../../Domains/Entities/Product';
import IProduct from '../../Interfaces/IProduct';
import IWebScrapperService from '../../Interfaces/IWebScrapperService';
import BuscapeScrapper from '../Models/BuscapeScrapper';
import MercadoLivreScrapper from '../Models/MercadoLivreScrapper';
import ProductModel from '../Models/ProductModel';

class WebScrapperService implements IWebScrapperService {
  private _mercadoLivreScraper: MercadoLivreScrapper;
  private _buscapeScraper: BuscapeScrapper;
  private _model: ProductModel;

  constructor(mercadoLivrescraper: MercadoLivreScrapper, buscapeScraper: BuscapeScrapper, model: ProductModel) {
    this._mercadoLivreScraper = mercadoLivrescraper;
    this._buscapeScraper = buscapeScraper;
    this._model = model;
  }

  public async getProducts(query: string): Promise<IProduct[]> {
    const buscapeHtml = await this._buscapeScraper.fetchData(query);

    const mercadoLivreHtml = await this._mercadoLivreScraper.fetchData(query);
    const parsedBuscapeHtml = this._buscapeScraper.decode(buscapeHtml);
    const parsedMercadoLivre = this._mercadoLivreScraper.decode(mercadoLivreHtml);

    const products = await Promise.all([...parsedBuscapeHtml, ...parsedMercadoLivre]);
    const productsFormated = products.map((product) => ({
      ...product,
      price: product?.price.replace('R$', '').replace('.', '').replace(',', '.').trim(),
      category: query,
    }));

    const productsFromDb = await this._model.create(productsFormated);

    const productsArray = productsFromDb.map((product) =>
      new Product(product).createDomain());

    return productsArray;
  }

  public async getAllFromDb(website: string): Promise<IProduct[]> {
    if (website === 'buscape') {
      const products = await this._model.findAllWebsite(website);
      const productsArray = products.map((product) =>
        new Product(product).createDomain());
      return productsArray;
    }
    if (website === 'mercadolivre') {
      const products = await this._model.findAllWebsite(website);
      const productsArray = products.map((product) =>
        new Product(product).createDomain());
      return productsArray;
    }

    const products = await this._model.findAll();
    const productsArray = products.map((product) =>
      new Product(product).createDomain());
    return productsArray;
  }
}

export default WebScrapperService;

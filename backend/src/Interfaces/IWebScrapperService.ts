import IProduct from './IProduct';

interface IWebScrapperService {
  getProducts(query: string): Promise<IProduct[]>;
  getAllFromDb(website: string): Promise<IProduct[]>;
}

export default IWebScrapperService;

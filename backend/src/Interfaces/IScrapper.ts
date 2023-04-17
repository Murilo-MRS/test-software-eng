import IProduct from './IProduct';

interface IScraper {
  fetchData(url: string): Promise<string>;
  decode(html: string): IProduct[];
}

export default IScraper;

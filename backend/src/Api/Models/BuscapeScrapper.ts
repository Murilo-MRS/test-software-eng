import axios from 'axios';
import * as cheerio from 'cheerio';
import IProduct from '../../Interfaces/IProduct';
import IScraper from '../../Interfaces/IScrapper';

class BuscapeScrapper implements IScraper {
  private _url: string;

  constructor() {
    this._url = 'https://www.buscape.com.br';
  }

  public async fetchData(query: string): Promise<string> {
    const urlFormated = `${this._url}/${query}`;
    return axios.get(urlFormated).then((response) => response.data);
  }

  public decode(html: string): IProduct[] {
    this._url = 'https://www.buscape.com.br';

    const $ = cheerio.load(html);

    const products = $('div.Hits_Wrapper__3q_7P > div > a').map((i, element) => ({
      photo: $(element).find('img').eq(0).attr('src'),
      description: $(element).find('h2').text(),
      price: $(element).find('p:nth-child(2)').text(),
      website: 'buscape',
    })).get();

    return products as IProduct[];
  }
}

export default BuscapeScrapper;

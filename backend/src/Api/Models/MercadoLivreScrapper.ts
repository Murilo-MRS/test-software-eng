import * as cheerio from 'cheerio';
import axios from 'axios';
import IProduct from '../../Interfaces/IProduct';
import IScraper from '../../Interfaces/IScrapper';

class MercadoLivreScrapper implements IScraper {
  private _url: string;

  constructor() {
    this._url = 'https://lista.mercadolivre.com.br';
  }

  public async fetchData(query: string): Promise<string> {
    const urlFormated = `${this._url}/${query}`;
    return axios.get(urlFormated).then((response) => response.data);
  }

  public decode(html: string): IProduct[] {
    this._url = 'https://lista.mercadolivre.com.br';

    const $ = cheerio.load(html);

    const products = $('ol > li > div > div').map((i, element) => ({
      photo: $(element).find('div img').eq(0).attr('data-src'),
      description: $(element).find('img').attr('alt'),
      price: $(element).find('span.price-tag-fraction').contents().eq(0)
        .text()
        .replace('.', ''),
      website: 'mercadolivre',
    })).get();

    return products as IProduct[];
  }
}

export default MercadoLivreScrapper;

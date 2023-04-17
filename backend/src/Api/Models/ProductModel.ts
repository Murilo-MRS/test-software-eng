import { ModelStatic } from 'sequelize';
import Product from '../../Database/Models/ProductModel';
import IProduct, { BulkProduct } from '../../Interfaces/IProduct';

class ProductModel {
  private model: ModelStatic<Product> = Product;

  public async findAll(): Promise<IProduct[]> {
    return this.model.findAll({ raw: true });
  }

  public async findAllWebsite(website: string): Promise<IProduct[]> {
    return this.model.findAll({ where: { website }, raw: true });
  }

  public async create(products: BulkProduct[]): Promise<Product[]> {
    return this.model.bulkCreate(products);
  }
}

export default ProductModel;

import IProduct from '../../Interfaces/IProduct';

class Product {
  private _id?: number;
  private _photo: string;
  private _description: string;
  private _category: string;
  private _website: string;
  private _price: string;

  constructor({ id, photo, description, category, price, website } : IProduct) {
    this._id = id;
    this._photo = photo;
    this._description = description;
    this._category = category as string;
    this._price = price;
    this._website = website;
  }

  public createDomain() {
    return {
      id: this._id,
      photo: this._photo,
      description: this._description,
      category: this._category,
      price: this._price,
      website: this._website,
    };
  }
}

export default Product;

interface IProduct {
  id?: number;
  photo: string;
  description: string;
  category?: string;
  price: string;
  website: string;
}

export interface BulkProduct extends Omit<any, string> {
  [key: number]: any;
}

export default IProduct;

import { Model, INTEGER, STRING } from 'sequelize';
import db from '.';

class Product extends Model {
  declare id: number;
  declare photo: string;
  declare description: string;
  declare category: string;
  declare price: string;
  declare website: string;
}

Product.init({
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: INTEGER,
  },
  photo: {
    allowNull: false,
    type: STRING,
  },
  description: {
    allowNull: false,
    type: STRING,
  },
  category: {
    allowNull: false,
    type: STRING,
  },
  price: {
    allowNull: false,
    type: STRING,
  },
  website: {
    allowNull: false,
    type: STRING,
  },
}, {
  underscored: true,
  sequelize: db,
  modelName: 'Product',
  tableName: 'products',
  timestamps: false,
});


export default Product;

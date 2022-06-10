import model from '../models/products';
import Product from '../interfaces/product.interface';

const getAll = async () => {
  const products = await model.getAll();

  return products;
};

const create = async (product: Product) => {
  const newProduct = await model.create(product);

  return newProduct;
};

export default {
  getAll,
  create,
};

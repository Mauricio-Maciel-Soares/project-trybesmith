import model from '../models/products';
import Product from '../interfaces/product.interface';

const getAll = async () => {
  const products = await model.getAll();

  return products;
};

const create = async (product: Product) => model.create(product);

export default {
  getAll,
  create,
};

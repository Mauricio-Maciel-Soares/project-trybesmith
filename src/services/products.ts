import model from '../models/products';
import Product from '../interfaces/product.interface';

const getAll = async () => model.getAll();

const create = async (product: Product) => model.create(product);

export default {
  getAll,
  create,
};

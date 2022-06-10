import model from '../models/products';

const getAll = async () => {
  const products = await model.getAll();

  return products;
};

export default {
  getAll,
};

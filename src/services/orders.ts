// import Order from '../interfaces/order.interface';
import model from '../models/orders';
// import products from '../models/products';

const getAll = async () => {
  const orders = await model.getAll();

  const result = orders.map((e) => (
    { id: e.id,
      userId: e.userId,
      productsIds: [e.productsIds] }
  ));
  
  return result;
};

export default {
  getAll,
};

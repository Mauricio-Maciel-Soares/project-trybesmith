import Order from '../interfaces/order.interface';
import model from '../models/orders';

const getAll = async (order:Order) => {
  const { id, userId, productId } = order;

  const orders = await model.getAll();
  const result = orders.map(() => ({ id, userId, productId }));
  return result;
};

export default {
  getAll,
};
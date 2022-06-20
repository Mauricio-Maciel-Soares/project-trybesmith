// import { RowDataPacket } from 'mysql2';
// import Order from '../interfaces/order.interface';
import Order from '../interfaces/order.interface';
import connection from './connection';

const getAll = async () => {
  const QUERY_GET_ALL = `SELECT ord.id, ord.userId, pr.id AS productsIds
  FROM Trybesmith.Orders AS ord
  INNER JOIN Trybesmith.Users AS us
  ON us.id = ord.userId
  INNER JOIN Trybesmith.Products as pr
  ON pr.orderId = ord.id`;

  const [orders] = await connection.execute(QUERY_GET_ALL);

  return orders as Order[];
};

export default {
  getAll,
};

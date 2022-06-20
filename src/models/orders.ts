import { RowDataPacket } from 'mysql2';
import connection from './connection';

const getAll = async () => {
  const QUERY_GET_ALL = 'SELECT * FROM Trybesmith.Orders';

  const [orders] = await connection.execute<RowDataPacket[]>(QUERY_GET_ALL);

  return orders;
};

export default {
  getAll,
};

import connection from './connection';
import Product from '../interfaces/product.interface';

const getAll = async () => {
  const QUERRY_GET_ALL = 'SELECT * FROM Trybesmith.Products';

  const [products] = await connection.execute(QUERRY_GET_ALL);

  return products as Product[];
};

export default {
  getAll,
};

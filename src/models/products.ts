import { ResultSetHeader, RowDataPacket } from 'mysql2/promise';
import connection from './connection';
import Product from '../interfaces/product.interface';

const getAll = async () => {
  const QUERY_GET_ALL = 'SELECT * FROM Trybesmith.Products';

  const [products] = await connection.execute(QUERY_GET_ALL); // [] = a primeira posição

  return products as Product[];
};

const create = async (product: Product) => {
  const { name, amount } = product;
  const QUERY_CREATE = 'INSERT INTO Trybesmith.Products (name, amount) VALUES (?, ?)';
  
  const newProduct = await connection.execute<ResultSetHeader>(QUERY_CREATE, [name, amount]);
  const [dataInserted] = newProduct;
  const { insertId } = dataInserted;
  return { id: insertId, ...product };
};

const getById = async (orderId: number) => {
  const QUERY_ID = 'SELECT id FROM Trybesmith.Products WHERE orderId = ?';

  const [product] = await connection.execute<RowDataPacket[]>(QUERY_ID, [orderId]);

  return product;
};

export default {
  getAll,
  create,
  getById,
};

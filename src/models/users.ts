import { ResultSetHeader } from 'mysql2/promise';
import connection from './connection';
import User from '../interfaces/user.interface';

const create = async (user: User) => {
  const { username, classe, level, password } = user;
  const QUERY_CREATE = `INSERT INTO Trybesmith.Products
    (username, classe, level, password) VALUES (?, ?, ?, ?)`;
  
  const newProduct = await connection
    .execute<ResultSetHeader>(QUERY_CREATE, [username, classe, level, password]);
  const [dataInserted] = newProduct;
  const { insertId } = dataInserted;
  return { id: insertId, ...user };
};

export default {
  create,
};

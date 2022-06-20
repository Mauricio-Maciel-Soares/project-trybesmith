import { Request, Response } from 'express';
import service from '../services/orders';

const getAll = async (_req: Request, res: Response) => {
  const order = service.getAll();
  return res.status(200).json(order);
};

export default {
  getAll,
};
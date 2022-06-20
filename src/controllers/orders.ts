import { Request, Response } from 'express';
import service from '../services/orders';

const getAll = async (_req: Request, res: Response) => {
  const orders = await service.getAll();
  return res.status(200).json(orders);
};

export default {
  getAll,
};

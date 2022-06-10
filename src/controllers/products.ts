import { Request, Response, NextFunction } from 'express';
import service from '../services/products';

const getAll = async (_req:Request, res:Response, next:NextFunction) => {
  try {
    const products = await service.getAll();

    return res.status(200).json(products);
  } catch (error) {
    next(error);
  }
};

const create = async (req: Request, res: Response) => {
  const product = req.body;

  const productCreated = await service.create(product);
  return res.status(200).json(productCreated);
};

export default {
  getAll,
  create,
};

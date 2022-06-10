import { Request, Response } from 'express';
import service from '../services/users';

const create = async (req: Request, res: Response) => {
  const user = req.body;

  const userCreated = await service.create(user);
  return res.status(201).json(userCreated);
};

export default {
  create,
};

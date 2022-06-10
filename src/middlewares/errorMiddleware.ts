import { Request, Response, NextFunction } from 'express';
import Error from '../interfaces/errorMiddleware.interface';

const errorMiddleware = (err: Error, _req: Request, res: Response, _next: NextFunction) => {
  if (err.status) return res.status(err.status).json({ message: err.message });

  return res.status(500).json({ message: err.message });
};

export default errorMiddleware;
// A propriedade 'status' não existe no tipo 'Error'.

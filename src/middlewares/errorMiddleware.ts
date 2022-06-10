import { Request, Response, NextFunction } from 'express';

const errorMiddleware = (err: Error, _req: Request, res: Response, _next: NextFunction) => {
  if (err.status) return res.status(err.status).json({ message: err.message });

  return res.status(500).json({ message: err.message });
};

export default errorMiddleware;

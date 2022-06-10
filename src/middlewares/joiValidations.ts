import joi from 'joi';
import { Request, Response, NextFunction } from 'express';

const nameAmountSchema = joi.object({
  name: joi.string().min(3).required(),
  amount: joi.string().min(3).required(),
});

const userValidationSchema = joi.object({
  username: joi.string().min(3).required(),
  classe: joi.string().min(3).required(),
  level: joi.number().integer().min(1).required(),
  password: joi.string().min(8).required(),
});

const isValidCreateProduct = (req: Request, _res: Response, next: NextFunction) => {
  const { name, amount } = req.body;

  const { error } = nameAmountSchema.validate({ name, amount });

  if (error) {
    if (error.message.includes('required')) {
      return next({ status: 400, message: error.message });
    }
    return next({ status: 422, message: error.message });
  }

  next();
};

const isValidCreateUser = (req: Request, _res: Response, next: NextFunction) => {
  const { username, classe, level, password } = req.body;

  const { error } = userValidationSchema.validate({ username, classe, level, password });

  if (error) {
    if (error.message.includes('required')) {
      return next({ status: 400, message: error.message });
    }
    return next({ status: 422, message: error.message });
  }

  next();
};

export default {
  isValidCreateProduct,
  isValidCreateUser,
};
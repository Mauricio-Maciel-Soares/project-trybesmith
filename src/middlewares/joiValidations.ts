import joi from 'joi';
import { Request, Response, NextFunction } from 'express';

const nameAmountSchema = joi.object({
  name: joi.string().min(3).required(),
  amount: joi.string().min(3).required(),
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

export default {
  isValidCreateProduct,
};
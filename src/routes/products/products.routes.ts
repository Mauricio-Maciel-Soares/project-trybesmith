import { Router } from 'express';
import controller from '../../controllers/products';
import joi from '../../middlewares/joiValidations';

const productsRouter = Router();

productsRouter.get('/', controller.getAll);
productsRouter.post('/', joi.isValidCreateProduct, controller.create);

export default productsRouter;

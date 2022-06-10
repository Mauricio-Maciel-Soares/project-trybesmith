import { Router } from 'express';
import controller from '../../controllers/products';

const productsRouter = Router();

productsRouter.get('/', controller.getAll);
productsRouter.post('/', controller.create);

export default productsRouter;

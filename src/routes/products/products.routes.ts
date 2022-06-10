import { Router } from 'express';
import controller from '../../controllers/products';

const productsRouter = Router();

productsRouter.get('/', controller.getAll);

export default productsRouter;

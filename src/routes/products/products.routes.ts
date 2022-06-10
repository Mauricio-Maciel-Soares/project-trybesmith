import { Router } from 'express';

const productsRouter = Router();

productsRouter.get('/', 'controller');

export default productsRouter;

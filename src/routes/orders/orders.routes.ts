import { Router } from 'express';
import controller from '../../controllers/orders';
// import joi from '../../middlewares/joiValidations';

const ordersRouter = Router();

ordersRouter.get('/', controller.getAll);

export default ordersRouter;

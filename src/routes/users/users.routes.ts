import { Router } from 'express';
import controller from '../../controllers/users';
import joi from '../../middlewares/joiValidations';

const usersRouter = Router();

usersRouter.post('/', joi.isValidCreateUser, controller.create);

export default usersRouter;

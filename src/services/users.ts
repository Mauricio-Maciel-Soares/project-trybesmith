import model from '../models/users';
import User from '../interfaces/user.interface';
import JWT from '../middlewares/JWT';

const create = async (user: User) => {
  const userCreated = await model.create(user);

  const token = JWT({ username: userCreated.username });

  return token;
};

export default {
  create,
};

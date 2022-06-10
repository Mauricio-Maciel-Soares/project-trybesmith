import model from '../models/users';
import User from '../interfaces/user.interface';

const create = async (user: User) => model.create(user);

export default {
  create,
};

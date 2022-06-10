import jwt from 'jsonwebtoken';

const secret = 'JWT_SECRET';

type User = {
  username: string
};

const JWT = (user:User) => {
  const jwtConfig: jwt.SignOptions = {
    expiresIn: '7d',
    algorithm: 'HS256',
  };

  const token = jwt.sign({ username: user.username }, secret, jwtConfig);

  return { token };
};

export default JWT;

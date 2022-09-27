import { Response, Request, NextFunction } from 'express';

const error = { message: 'Username or password invalid' };
class LoginValidation {
  validUsername = (req: Request, res: Response, next: NextFunction) => {
    const { username } = req.body;
    if (!username) {
      return res.status(400)
        .json({ message: '"username" is required' });
    }
    if (typeof username !== 'string') {
      return res.status(401)
        .json(error);
    }
    if (username.length <= 2) {
      return res.status(401)
        .json(error);
    }
    next();
  };

  validPassword = (req: Request, res: Response, next: NextFunction) => {
    const { password } = req.body;
    if (!password) {
      return res.status(400)
        .json({ message: '"password" is required' });
    }
    if (typeof password !== 'string') {
      return res.status(401)
        .json(error);
    }
    if (password.length < 3) {
      return res.status(401)
        .json(error);
    }
    next();
  };
}
export default LoginValidation;
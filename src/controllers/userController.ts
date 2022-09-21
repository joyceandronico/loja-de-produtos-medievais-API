import { Request, Response, NextFunction } from 'express';
import crypto from 'crypto';
import UserService from '../services/userService';

export default class UserController {
  private service = new UserService();

  public createNewUser = async (req: Request, res: Response, _next: NextFunction):
  Promise<Response | void> => {
    const {
      username,
      classe,
      level,
      password } = req.body;
    try {
      await this.service.createNewUser(
        username,
        classe,
        level,
        password,
      );
      const token = crypto.randomBytes(8).toString('hex');
      return res.status(201).json({ token });
    } catch (error: unknown) {
      return res.status(500).send({ message: (error as Error).message });
    }
  };
}
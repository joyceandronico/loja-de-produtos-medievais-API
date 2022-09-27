import { Request, Response } from 'express';
import LoginService from '../services/loginService';

class LoginController {
  private loginService: LoginService;

  constructor() {
    this.loginService = new LoginService();
  }

  public newLogin = async (req: Request, res: Response) => {
    const { username, password } = req.body;

    const token = await this.loginService.newLogin({ username, password });

    if (!token) return res.status(401).json({ message: 'Username or password invalid' });

    res.status(200).json({ token });
  };
}

export default LoginController;

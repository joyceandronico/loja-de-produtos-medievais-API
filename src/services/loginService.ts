import jwtGenerator from '../helpers/jwtGenerator';
import ILogin from '../interfaces/login.interface';
import UserService from './userService';

class LoginService {
  private userService: UserService;

  constructor() {
    this.userService = new UserService();
  }

  public newLogin = async (login: ILogin): Promise<string | boolean> => {
    const user = await this.userService.newLogin(login);

    if (!user) return false;

    const token = jwtGenerator({ id: user.id, username: user.username });

    return token;
  };
}
export default LoginService;
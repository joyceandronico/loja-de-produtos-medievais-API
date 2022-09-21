import IUser from '../interfaces/users.interface';
import UserModel from '../models/userModel';

export default class UserService {
  public model = new UserModel();

  public createNewUser = async (
    username: string,
    classe: string,
    level: number,
    password: string,
  ):Promise<IUser> => {
    const user = await this.model.createNewUser(
      username,
      classe,
      level,
      password,
    );
    return user;
  };
}
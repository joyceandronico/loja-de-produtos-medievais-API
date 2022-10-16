import { ResultSetHeader } from 'mysql2/promise';
import connection from './connection';
import IUser from '../interfaces/users.interface';
import ILogin from '../interfaces/login.interface';

export default class UserModel {
  public createNewUser = async (
    username: string,
    classe: string,
    level: number,
    password: string,
  ):Promise<IUser> => {
    const [user] = await connection.execute<ResultSetHeader>(
      'INSERT INTO loja_medieval.Users (username, classe, level, password) VALUES (?, ?, ?, ?);',
      [username, classe, level, password],
    );
    return { id: user.insertId, username, classe, level, password };
  };

  public newLogin = async (login: ILogin): Promise<IUser | undefined> => {
    const { username, password } = login;
    const result = await connection.execute(
      'SELECT * FROM loja_medieval.Users WHERE username=? AND password=?',
      [username, password],
    );
    const [rows] = result;
    const [user] = rows as IUser[];
    return user;
  };
}
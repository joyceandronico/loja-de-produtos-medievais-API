import { Request } from 'express';
import Token from './token';

interface UserLog extends Request {
  user?: Token;
}

export default UserLog;
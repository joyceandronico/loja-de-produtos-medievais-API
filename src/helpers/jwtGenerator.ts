import { sign, Secret } from 'jsonwebtoken';
import IToken from '../interfaces/token';

const JwtGenerator = (data: IToken): string => {
  const secret = process.env.JWT_SECRET || 'secret' as Secret;

  const token = sign({ data }, secret, { expiresIn: '7d', algorithm: 'HS256' });

  return token;
};
export default JwtGenerator;
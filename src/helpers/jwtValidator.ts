import { verify, Secret, JwtPayload } from 'jsonwebtoken';

const JwtValidator = (token: string): string | JwtPayload => {
  const secret = process.env.JWT_SECRET || 'secret' as Secret;

  return verify(token, secret);
};

export default JwtValidator;
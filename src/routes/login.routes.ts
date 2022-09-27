import { Router } from 'express';
import LoginController from '../controllers/loginController';
import LoginValidation from '../middlewares/loginValidation';

const loginRoutes = Router();
const loginController = new LoginController();
const loginValidation = new LoginValidation();

loginRoutes.post(
  '/',
  loginValidation.validUsername,
  loginValidation.validPassword,
  loginController.newLogin,
);

export default loginRoutes;
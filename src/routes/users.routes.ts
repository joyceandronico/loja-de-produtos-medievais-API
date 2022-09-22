import { Router } from 'express';
import UserController from '../controllers/userController';
import UserValidations from '../middlewares/userValidation.middleware';

const userRoutes = Router();

const userController = new UserController();
const validations = new UserValidations();

userRoutes.post(
  '/',
  validations.usernameValidation,
  validations.classeValidation,
  validations.levelValidation,
  validations.passwordValidation,
  userController.createNewUser,
);

export default userRoutes;
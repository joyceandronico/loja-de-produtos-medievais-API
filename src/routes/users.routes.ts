import { Router } from 'express';
import UserController from '../controllers/userController';

const userRoutes = Router();

const userController = new UserController();

userRoutes.post('/', userController.createNewUser);

export default userRoutes;
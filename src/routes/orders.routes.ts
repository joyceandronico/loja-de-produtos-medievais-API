import { Router } from 'express';
import OrderController from '../controllers/orderController';
import authMiddleware from '../middlewares/authMiddleware';
import OrderValidation from '../middlewares/orderValidation.middleware';

const orderRoutes = Router();
const orderController = new OrderController();

orderRoutes.get('/', orderController.getAllOrders);
orderRoutes.post('/', authMiddleware, OrderValidation, orderController.createOrder);

export default orderRoutes;
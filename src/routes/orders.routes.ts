import { Router } from 'express';
import OrderController from '../controllers/orderController';

const orderRoutes = Router();
const orderController = new OrderController();

orderRoutes.get('/', orderController.getAllOrders);

export default orderRoutes;
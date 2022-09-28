import { Request, Response, NextFunction } from 'express';
import OrderService from '../services/orderService';
import UserLog from '../interfaces/UserLog';

export default class OrderController {
  private service = new OrderService();

  public getAllOrders = async (req: Request, res: Response, _next: NextFunction):
  Promise<Response | void> => {
    const order = await this.service.getAllOrders();
    res.status(200).json(order);
  };

  public createOrder = async (req: UserLog, res: Response) => {
    const userId = req.user?.id;
    const { productsIds } = req.body;

    const createdOrder = await this.service.createOrder(userId, productsIds);

    res.status(201).json(createdOrder);
  };
}

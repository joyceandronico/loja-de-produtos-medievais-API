import { Request, Response, NextFunction } from 'express';
import OrderService from '../services/orderService';

export default class OrderController {
  private service = new OrderService();

  public getAllOrders = async (req: Request, res: Response, _next: NextFunction):
  Promise<Response | void> => {
    const order = await this.service.getAllOrders();
    res.status(200).json(order);
  };
}
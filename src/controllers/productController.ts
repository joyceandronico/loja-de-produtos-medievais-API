import { Request, Response, NextFunction } from 'express';
import ProductService from '../services/productService';

export default class ProductController {
  public service = new ProductService();

  public createProduct = async (req: Request, res: Response, _next: NextFunction):
  Promise<Response | void> => {
    const { name, amount } = req.body;
    try {
      const product = await this.service.createProduct(name, amount);
      return res.status(201).json(product);
    } catch (error: unknown) {
      return res.status(500).send({ message: (error as Error).message });
    }
  };
}

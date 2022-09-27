import { NextFunction, Request, Response } from 'express';
// import orderSchema from '../schemas/orderSchema';

const OrderValidation = (req: Request, res: Response, next: NextFunction) => {
  const { productsIds } = req.body;

  // const { error } = orderSchema.validate({ productsIds });

  // if (error) throw error;
  if (!productsIds) {
    return res.status(400).json({ message: '"productsIds" is required' });
  }

  if (productsIds.length === 0) {
    return res.status(422).json({ message: '"productsIds" must include only numbers' });
  }

  if (productsIds.typeof !== 'array') {
    return res.status(422).json({ message: '"productsIds" must be an array' });
  }

  next();
};

export default OrderValidation;
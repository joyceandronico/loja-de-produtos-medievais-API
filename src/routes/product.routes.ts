import { Router } from 'express';
import ProductController from '../controllers/productController';
import ProductsValidation from '../middlewares/productsValidation.middleware';

const productsRoutes = Router();

const productController = new ProductController();
const validation = new ProductsValidation();

productsRoutes.post(
  '/',
  validation.nameValidation,
  validation.amountValidation,
  productController.createProduct,
);
productsRoutes.get('/', productController.getAllProducts);

export default productsRoutes;
import { Router } from 'express';
import ProductController from '../controllers/productController';

const productsRoutes = Router();

const productController = new ProductController();

productsRoutes.post('/', productController.createProduct);
productsRoutes.get('/', productController.getAllProducts);

export default productsRoutes;
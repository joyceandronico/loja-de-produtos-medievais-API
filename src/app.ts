import express from 'express';
import errorMiddleware from './middlewares/error.middleware';
import productsRoutes from './routes/product.routes';

const app = express();

app.use(express.json());

app.use('/products', productsRoutes);

app.use(errorMiddleware);

export default app;

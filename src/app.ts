import express from 'express';
import errorMiddleware from './middlewares/error.middleware';
import orderRoutes from './routes/orders.routes';
import productsRoutes from './routes/product.routes';

const app = express();

app.use(express.json());

app.use('/products', productsRoutes);
app.use('/orders', orderRoutes);

app.use(errorMiddleware);

export default app;

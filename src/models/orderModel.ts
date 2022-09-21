import connection from './connection';
import IOrder from '../interfaces/orders.interfaces';

export default class OrderModel {
  public connection;

  constructor() {
    this.connection = connection;
  }

  public getAllOrders = async ():Promise<IOrder[]> => {
    const [orders] = await connection.execute('SELECT * FROM Trybesmith.Orders');

    const OrderList = await Promise.all(Object.values(orders).map(async (order) => {
      const [products] = await this.connection.execute(
        'SELECT * FROM Trybesmith.Products WHERE orderId = ?',
        [order.id],
      );

      const productsIds = Object.values(products).map((product) => product.id);

      return { ...order, productsIds };
    }));

    return OrderList as IOrder[];
  };
}
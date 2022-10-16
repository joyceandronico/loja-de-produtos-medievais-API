import { ResultSetHeader } from 'mysql2';
import connection from './connection';
import IOrder from '../interfaces/orders.interfaces';

export default class OrderModel {
  public connection;

  constructor() {
    this.connection = connection;
  }

  public getAllOrders = async ():Promise<IOrder[]> => {
    const [orders] = await connection.execute('SELECT * FROM loja_medieval.Orders');

    const OrderList = await Promise.all(Object.values(orders).map(async (order) => {
      const [products] = await this.connection.execute(
        'SELECT * FROM loja_medieval.Products WHERE orderId = ?',
        [order.id],
      );

      const productsIds = Object.values(products).map((product) => product.id);

      return { ...order, productsIds };
    }));

    return OrderList as IOrder[];
  };

  public createOrder = async (userId: number | undefined): Promise<number> => {
    const result = await connection.execute<ResultSetHeader>(
      'INSERT INTO loja_medieval.Orders (userId) VALUES (?);',
      [userId],
    );
    const [dataInserted] = result;
    const { insertId } = dataInserted;

    return insertId;
  };
}

import { ResultSetHeader } from 'mysql2/promise';
import connection from './connection';
import IProduct from '../interfaces/products.interface';

export default class ProductModel {
  public createProduct = async (name: string, amount: string):Promise<IProduct> => {
    const [product] = await connection.execute<ResultSetHeader>(
      'INSERT INTO loja_medieval.Products (name, amount) VALUES (?, ?);',
      [name, amount],
    );
    return { id: product.insertId, name, amount };
  };

  public getAllProducts = async ():Promise<IProduct[]> => {
    const [product] = await connection.execute(
      'SELECT * FROM loja_medieval.Products',
    );
    return product as IProduct[];
  };

  public updateOrderId = async (id: number, orderId: number) => {
    await connection.execute(
      'UPDATE loja_medieval.Products SET orderId=? WHERE id=?',
      [orderId, id],
    );
  };
}
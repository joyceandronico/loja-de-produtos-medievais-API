import ProductModel from '../models/productModel';
import IProduct from '../interfaces/products.interface';

export default class ProductService {
  public model = new ProductModel();

  public getAllProducts = async (): Promise<IProduct[]> => {
    const products = await this.model.getAllProducts();
    return products;
  };

  public createProduct = async (name: string, amount: string): Promise<IProduct> => {
    const products = await this.model.createProduct(name, amount);
    return products;
  };

  public updateOrderId = async (id: number, orderId: number) => {
    await this.model.updateOrderId(id, orderId);
  };
}
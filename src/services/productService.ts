import ProductModel from '../models/productModel';
import IProduct from '../interfaces/products.interface';

export default class ProductService {
  public model = new ProductModel();

  public createProduct = async (name: string, amount: string): Promise<IProduct> => {
    const products = await this.model.createProduct(name, amount);
    return products;
  };
}
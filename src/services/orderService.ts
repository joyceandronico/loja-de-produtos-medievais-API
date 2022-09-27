import OrderModel from '../models/orderModel';
import ProductModel from '../models/productModel';
import IOrder from '../interfaces/orders.interfaces';

export default class OrderService {
  public modelOr: OrderModel;

  public modelP: ProductModel;

  constructor() {
    this.modelOr = new OrderModel();
    this.modelP = new ProductModel();
  }

  public getAllOrders = async (): Promise<IOrder[]> => {
    const products = await this.modelP.getAllProducts();
    const orders = await this.modelOr.getAllOrders();
    const orderIds: IOrder[] = orders.map((ord) => {
      const productsFilter: number[] = products.map((p) => {
        if (p.orderId === ord.id) return p.id;
        return 0;
      });
      return {
        id: ord.id,
        userId: ord.userId,
        productsIds: productsFilter.filter((p: number) => p !== 0) } as unknown as IOrder;
    });
    return orderIds;
  };

  public createOrder = async (userId: number | undefined, productsIds: number[]) => {
    const orderId = await this.modelOr.createOrder(userId);

    const updateProductOrderIdPromises = productsIds.map(
      (productId) => this.modelP.updateOrderId(productId, orderId),
    );
    await Promise.all(updateProductOrderIdPromises);

    return { userId, productsIds };
  };
}
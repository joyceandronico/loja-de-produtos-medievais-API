interface IOrder {
  id: number,
  userId: number,
  productsIds: number[] | number,
}

export default IOrder;
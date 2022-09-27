import Joi from 'joi';

const orderSchema = Joi.object({
  productsIds: Joi.array()
    .required(),
});

export default orderSchema;
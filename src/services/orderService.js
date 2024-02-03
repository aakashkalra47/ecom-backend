const Order = require('../models/orders/orders');

const postOrder = async (userId, orderData) => {
  const order = new Order(orderData);
  order.user = userId;
  // to be changed , pending for now because order can be only by cod for now
  order.paymentStatus = false;
  order.paymentMode = 'COD';
  await order.save();
  if (!order) {
    const error = new Error('Error in placing order');
    error.status = 404;
    throw error;
  } else {
    return order;
  }
};

const getAllOrders = async (user) => {
  const orders = await Order.find({ user }).populate('items.productId');
  if (!orders) {
    const error = new Error('Orders Not Found');
    error.status = 404;
    throw error;
  } else {
    return orders;
  }
};

module.exports = {
  postOrder,
  getAllOrders,
};

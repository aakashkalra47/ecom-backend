const Order = require("../models/orders/orders");
const postOrder = async (userId, orderData) => {
  const order = new Order(orderData);
  order.userId = userId;
  order.paymentStatus = false; //to be changed , pending for now because order can be only by cod for now
  order.paymentMode = "COD";
  await order.save();
  if (!order) {
    let error = new Error("User Not Found");
    error.status = 404;
    throw error;
  } else {
    return order;
  }
};
module.exports = {
  postOrder,
};

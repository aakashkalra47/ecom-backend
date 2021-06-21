const User = require("../models/users/user");
const addItemToCart = async (userId, productId, size) => {
  const updatedUser = await User.findOneAndUpdate(
    { _id: userId },
    {
      $push: {
        cart: {
          product: productId,
          size,
        },
      },
    },
    { new: true }
  )
    .populate("wishlist")
    .populate("cart.product");
  if (!updatedUser) {
    let error = new Error("User Not Found");
    error.status = 404;
    throw error;
  } else {
    return updatedUser;
  }
};
const removeCartItem = async (userId, productId) => {
  const updatedUser = await User.findOneAndUpdate(
    { _id: userId },
    {
      $pull: {
        cart: {
          product: productId,
        },
      },
    },
    { new: true }
  )
    .populate("wishlist")
    .populate("cart.product");

  if (!updatedUser) {
    let error = new Error("User Not Found");
    error.status = 404;
    throw error;
  } else {
    return foundUser;
  }
};
module.exports = {
  addItemToCart,
  removeCartItem,
};

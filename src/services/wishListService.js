const User = require("../models/users/user");
const addWishListItem = async (userId, productId) => {
  const updatedUser = await User.findOneAndUpdate(
    { _id: userId },
    {
      $push: {
        wishlist: productId,
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
const removeWishListItem = async (userId, productId) => {
  const updatedUser = await User.findOneAndUpdate(
    { _id: userId },
    {
      $pull: {
        wishlist: productId,
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
module.exports = {
  addWishListItem,
  removeWishListItem,
};

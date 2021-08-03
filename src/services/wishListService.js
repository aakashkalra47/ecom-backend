const User = require("../models/users/user");
const addWishListItem = async (userId, prductId) => {
  const updatedUser = await User.findOneAndUpdate(
    { _id: userId },
    { new: true }
  );
  // .populate("wishlist")
  // .populate("cart.product");
  if (!updatedUser) {
    let error = new Error("User Not Found");
    error.status = 404;
    throw error;
  } else {
    // return updatedUser;
    return productId;
  }
};
const getWishListItems = async (userId, productId) => {
  const wishlist = await User.findOne({ _id: userId }, { wishlist: 1 });
  // .populate("wishlist")
  // .populate("cart.product");
  if (!wishlist) {
    let error = new Error("User Not Found");
    error.status = 404;
    throw error;
  } else {
    // return updatedUser;
    return wishlist;
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
  );
  // .populate("wishlist")
  // .populate("cart.product");
  if (!updatedUser) {
    let error = new Error("User Not Found");
    error.status = 404;
    throw error;
  } else {
    // return updatedUser;
    return productId;
  }
};
module.exports = {
  addWishListItem,
  removeWishListItem,
  getWishListItems,
};

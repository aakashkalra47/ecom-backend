const User = require("../models/users/user");
const getCartItems = async (userId) => {
  const user = await User.findOne({ _id: userId },{cart:1}).populate(
    "cart.productId"
  );
  if (!user) {
    let error = new Error("User Not Found");
    error.status = 404;
    throw error;
  } else {
    return user.cart;
  }
};
const addItemToCart = async (userId, productId, size) => {
  const newItem = {
    productId,
    size,
  };
  const updatedUser = await User.findOneAndUpdate(
    { _id: userId },
    {
      $push: {
        cart: newItem,
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
    return newItem;
  }
};
const removeCartItem = async (userId, productId, size) => {
  const item = {
    productId,
    size,
  };
  const updatedUser = await User.findOneAndUpdate(
    { _id: userId },
    {
      $pull: {
        cart: item,
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
    return item;
  }
};
const moveToWishList = async (userId, productId, size) => {
  const updatedUser = await User.findOneAndUpdate(
    { _id: userId },
    {
      $pull: {
        cart: {
          productId,
          size,
        },
      },
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
module.exports = {
  addItemToCart,
  removeCartItem,
  moveToWishList,
  getCartItems
};

const User = require("../models/users/user");
const getCartItems = async (userId) => {
  const user = await User.findOne({ _id: userId }, { cart: 1 });
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
  console.log('1..item',item);
  const updatedUser = await User.findOneAndUpdate(
    { _id: userId },
    {
      $pull: {
        cart: item,
      },
    },
    { new: true }
  );
  if (!updatedUser) {
    let error = new Error("User Not Found");
    error.status = 404;
    throw error;
  } else {
    return item;
  }
};
const moveToWishList = async (userId, productId, size) => {
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
      $push: {
        wishlist: productId,
      },
    },
    { new: true }
  )
  if (!updatedUser) {
    let error = new Error("User Not Found");
    error.status = 404;
    throw error;
  } else {
    return item;

  }
};
module.exports = {
  addItemToCart,
  removeCartItem,
  moveToWishList,
  getCartItems,
};

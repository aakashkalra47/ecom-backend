const User = require('../models/users/user');

const addWishListItem = async (userId, productId) => {
  const updatedUser = await User.findOneAndUpdate(
    { _id: userId },
    { $push: { wishlist: productId } },
    { new: true },
  );
  if (!updatedUser) {
    const error = new Error('User Not Found');
    error.status = 404;
    throw error;
  } else {
    return productId;
  }
};
const getWishListItems = async (userId) => {
  const user = await User.findOne({ _id: userId }, { wishlist: 1 });
  if (!user) {
    const error = new Error('User Not Found');
    error.status = 404;
    throw error;
  } else {
    return user.wishlist;
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
    { new: true },
  );
  if (!updatedUser) {
    const error = new Error('User Not Found');
    error.status = 404;
    throw error;
  } else {
    return productId;
  }
};
module.exports = {
  addWishListItem,
  removeWishListItem,
  getWishListItems,
};

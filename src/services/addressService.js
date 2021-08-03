const User = require("../models/users/user");
const getAddresses = async (userId, address) => {
  const user = await User.findOneAndUpdate({ _id: userId });
  // .populate("wishlist")
  // .populate("cart.product");
  if (!user) {
    let error = new Error("User Not Found");
    error.status = 404;
    throw error;
  } else {
    return user.address;
  }
};
const addAddress = async (userId, address) => {
  const updatedUser = await User.findOneAndUpdate(
    { _id: userId },
    {
      $push: {
        address,
      },
    },
    { new: true }
  )
    // .populate("wishlist")
    // .populate("cart.product");
  if (!updatedUser) {
    let error = new Error("User Not Found");
    error.status = 404;
    throw error;
  } else {
    return address;
  }
};
const updateAddress = async (userId, address) => {
  const updatedUser = await User.findOneAndUpdate(
    { _id: userId, "address._id": address._id },
    {
      $set: {
        "address.$": address,
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
const deleteAddress = async (userId, address) => {
  const updatedUser = await User.findOneAndUpdate(
    { _id: userId, "address._id": address._id },
    {
      $pull: {
        address: {
          _id: address._id,
        },
      },
    },
    { new: true }
  )
    // .populate("wishlist")
    // .populate("cart.product");
  if (!updatedUser) {
    let error = new Error("User Not Found");
    error.status = 404;
    throw error;
  } else {
    return address;
  }
};
module.exports = {
  addAddress,
  updateAddress,
  deleteAddress,
  getAddresses,
};

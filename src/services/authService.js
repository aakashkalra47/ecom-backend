const User = require('../models/users/user');
const { generateToken } = require('../utils/jwtToken');

const login = async (body) => {
  const { email, password } = body;
  const foundUser = await User.findOne({ email, password }, { email: 1, password: 1, name: 1 });
  if (!foundUser) {
    const error = new Error('User Not Found');
    error.status = 404;
    throw error;
  } else {
    const token = generateToken(foundUser._id);
    return { user: foundUser, token };
  }
};
const signup = async (body) => {
  const { email, password, name } = body;
  const user = new User({ email, password, name });
  await user.save();
  return user;
};
const getUser = async (_id) => {
  const user = await User.findById({ _id }, { email: 1, password: 1, name: 1 });
  return user;
};
module.exports = {
  login,
  signup,
  getUser,
};

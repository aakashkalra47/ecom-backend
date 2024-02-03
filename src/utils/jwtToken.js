const jwt = require('jsonwebtoken');

const secret = process.env.JWT_SECRET || 'secret';
require('dotenv');

exports.generateToken = (userId) => {
  const token = jwt.sign({ userId }, secret, { expiresIn: '10d' });
  if (!token) {
    const e = new Error('Error in Token Generation');
    e.status = 500;
    throw e;
  }
  return token;
};

const express = require('express');

const router = express.Router();
const { errorFormatter } = require('../utils/errorFormatter');
const { verifyToken } = require('../middlewares/authentication');
const { postOrder, getAllOrders } = require('../services/orderService');

router.post('/', verifyToken, async (req, res) => {
  try {
    const order = await postOrder(req.userId, req.body);
    return res.status(200).json({ result: order });
  } catch (e) {
    const { status, message } = errorFormatter(e);
    return res.status(status).json({ message });
  }
});

router.get('/', verifyToken, async (req, res) => {
  try {
    const orders = await getAllOrders(req.userId);
    return res.status(200).json({ result: orders });
  } catch (e) {
    const { status, message } = errorFormatter(e);
    return res.status(status).json({ message });
  }
});
module.exports = router;

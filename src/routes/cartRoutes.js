const express = require("express");
const router = express.Router();
const { addItemToCart, removeCartItem } = require("../services/cartService");
const { errorFormatter } = require("../utils/errorFormatter");
const { verifyToken } = require("../middlewares/authentication");

router.put("/add", verifyToken, async (req, res) => {
  try {
    const user = await addItemToCart(
      req.userId,
      req.body.productId,
      req.body.size
    );
    return res.status(200).json({ result: user });
  } catch (e) {
    const { status, message } = errorFormatter(e);
    return res.status(status).json({ message });
  }
});
router.post("/remvoe", verifyToken, async (req, res) => {
  try {
    const user = await removeCartItem(req.userId, req.body.productId);
    return res.status(200).json({ result: user });
  } catch (e) {
    // console.log('1..e',e);
    const { status, message } = errorFormatter(e);
    return res.status(status).json({ message });
  }
});
module.exports = router;

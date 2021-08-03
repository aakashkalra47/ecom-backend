const express = require("express");
const router = express.Router();
const {
  addItemToCart,
  removeCartItem,
  moveToWishList,
  getCartItems,
} = require("../services/cartService");
const { errorFormatter } = require("../utils/errorFormatter");
const { verifyToken } = require("../middlewares/authentication");

router.put("/add", verifyToken, async (req, res) => {
  try {
    const item = await addItemToCart(
      req.userId,
      req.body.productId,
      req.body.size
    );
    return res.status(200).json({ result: item });
  } catch (e) {
    const { status, message } = errorFormatter(e);
    return res.status(status).json({ message });
  }
});
router.get("/", verifyToken, async (req, res) => {
  try {
    const item = await getCartItems(req.userId);
    return res.status(200).json({ result: item });
  } catch (e) {
    const { status, message } = errorFormatter(e);
    return res.status(status).json({ message });
  }
});
router.put("/remove", verifyToken, async (req, res) => {
  try {
    const { size, productId } = req.body;
    const item = await removeCartItem(req.userId, productId, size);
    return res.status(200).json({ result: item });
  } catch (e) {
    const { status, message } = errorFormatter(e);
    return res.status(status).json({ message });
  }
});
router.put("/move", verifyToken, async (req, res) => {
  try {
    const { size, productId } = req.body;
    const user = await moveToWishList(req.userId, productId, size);
    return res.status(200).json({ result: user });
  } catch (e) {
    const { status, message } = errorFormatter(e);
    return res.status(status).json({ message });
  }
});
module.exports = router;

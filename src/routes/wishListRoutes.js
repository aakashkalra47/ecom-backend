const express = require("express");
const router = express.Router();    
const {addWishListItem,removeWishListItem,getWishListItems } = require("../services/wishListService");
const { errorFormatter } = require("../utils/errorFormatter");
const {verifyToken}=require('../middlewares/authentication');

router.put("/add",verifyToken, async (req, res) => {
  try {
    const item = await addWishListItem(req.userId,req.body.productId);
    return res.status(200).json({ result: item });
  } catch (e) {
    const { status, message } = errorFormatter(e);
    return res.status(status).json({ message });
  }
});
router.get("/",verifyToken, async (req, res) => {
  try {
    const items = await getWishListItems(req.userId);
    return res.status(200).json({ result: items });
  } catch (e) {
    const { status, message } = errorFormatter(e);
    return res.status(status).json({ message });
  }
});
router.put("/remvoe",verifyToken, async (req, res) => {
  try {
    const id = await removeWishListItem(req.userId,req.body.productId);
    return res.status(200).json({ result: id });
  } catch (e) {
    const { status, message } = errorFormatter(e);
    return res.status(status).json({ message });
  }
});
module.exports = router;

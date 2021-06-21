const express = require("express");
const router = express.Router();    
const {addWishListItem,removeWishListItem } = require("../services/wishListService");
const { errorFormatter } = require("../utils/errorFormatter");
const {verifyToken}=require('../middlewares/authentication');

router.put("/add",verifyToken, async (req, res) => {
  try {
    const user = await addWishListItem(req.userId,req.body.productId);
    return res.status(200).json({ result: user });
  } catch (e) {
    const { status, message } = errorFormatter(e);
    return res.status(status).json({ message });
  }
});
router.put("/remvoe",verifyToken, async (req, res) => {
  try {
    const user = await removeWishListItem(req.userId,req.body.productId);
    return res.status(200).json({ result: user });
  } catch (e) {
    // console.log('1..e',e); 
    const { status, message } = errorFormatter(e);
    return res.status(status).json({ message });
  }
});
module.exports = router;

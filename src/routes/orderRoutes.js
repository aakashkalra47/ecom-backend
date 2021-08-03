const express = require("express");
const router = express.Router();
const { errorFormatter } = require("../utils/errorFormatter");
const { verifyToken } = require("../middlewares/authentication");
const { postOrder } = require("../services/orderService");

router.post("/", verifyToken, async (req, res) => {
  try {
    const user = await postOrder(req.userId, req.body);
    return res.status(200).json({ result: user });
  } catch (e) {
    const { status, message } = errorFormatter(e);
    return res.status(status).json({ message });
  }
});
module.exports = router;

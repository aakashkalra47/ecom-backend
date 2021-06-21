const express = require("express");
const router = express.Router();    
const { login,signup,getUser } = require("../services/authService");
const { errorFormatter } = require("../utils/errorFormatter");
const {verifyToken}=require('../middlewares/authentication');
router.post("/login", async (req, res) => {
  try {
    const loginData = await login(req.body);
    return res.status(200).json({ result: loginData });
  } catch (e) {
    const { status, message } = errorFormatter(e);
    return res.status(status).json({ message });
  }
});
router.post("/signup", async (req, res) => {
  try {
    const user = await signup(req.body);
    return res.status(200).json({ result: user });
  } catch (e) {
    const { status, message } = errorFormatter(e);
    return res.status(status).json({ message });
  }
});
router.get("/user",verifyToken, async (req,res)=>{
  try {
    const user = await getUser(req.userId);
    return res.status(200).json({ result: user });
  } catch (e) {
    const { status, message } = errorFormatter(e);
    return res.status(status).json({ message });
  }
})
module.exports = router;


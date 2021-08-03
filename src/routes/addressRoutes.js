const express = require("express");
const router = express.Router();    
const { errorFormatter } = require("../utils/errorFormatter");
const {addAddress,updateAddress,deleteAddress,getAddresses}=require("../services/addressService");
const {verifyToken}=require('../middlewares/authentication');
router.get("/",verifyToken,async(req,res)=>{
  try {
      console.log('1..body',req.body,req.userId);
    const address = await getAddresses(req.userId);
    return res.status(200).json({ result: address });
  } catch (e) {
    const { status, message } = errorFormatter(e);
    return res.status(status).json({ message });
  } 
});
router.post("/",verifyToken, async (req, res) => {
  try {
      console.log('1..body',req.body,req.userId);
    const address = await addAddress(req.userId,req.body);
    return res.status(200).json({ result: address });
  } catch (e) {
    const { status, message } = errorFormatter(e);
    return res.status(status).json({ message });
  }
});
router.put("/",verifyToken,async(req,res)=>{
    try {
        console.log('1..body',req.body,req.userId);
      const address = await updateAddress(req.userId,req.body);
      return res.status(200).json({ result: address });
    } catch (e) {
      const { status, message } = errorFormatter(e);
      return res.status(status).json({ message });
    } 
});
router.delete("/",verifyToken,async(req,res)=>{
    try {
        console.log('1..body',req.body,req.userId);
      const address = await deleteAddress(req.userId,req.body);
      return res.status(200).json({ result: address });
    } catch (e) {
      const { status, message } = errorFormatter(e);
      return res.status(status).json({ message });
    } 
});


module.exports = router;


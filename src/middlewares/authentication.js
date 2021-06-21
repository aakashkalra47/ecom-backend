const jwt = require('jsonwebtoken');
const secret=process.env.JWT_SECRET;
exports.verifyToken=async (req,res,next)=>{
    try{
        // console.log('1..authorization',req.headers,secret);
        const decoded=jwt.verify(req.headers.authorization,secret);
        req.userId=decoded.userId;
        next();
    }
    catch(e){
        return res.status(error.status).json({message:"Token Invalid",status:401});
    }
}
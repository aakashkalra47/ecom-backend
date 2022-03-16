const jwt = require('jsonwebtoken');
const secret=process.env.JWT_SECRET||'secret';
exports.verifyToken=async (req,res,next)=>{
    try{
        const decoded=jwt.verify(req.headers.authorization,secret);
        req.userId=decoded.userId;
        next();
    }
    catch(e){
        e.status=401;
        return res.status(e.status).json({message:"Token Invalid",status:401});
    }
}
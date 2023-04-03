const jwt=require('jsonwebtoken');
const auth=require('../Model/authModel');

const isAuthenticated=async(req,res,next)=>{
    let token;
    const {authorization}=req.headers;

    if(authorization && authorization.startsWith('Bearer')){
        try {
            token=authorization.split(" ")[1];
            const {userId}=jwt.verify(token,"secret");

            req.user=await auth.findById(userId).select("--password");
            next();
        } catch (error) {
            return res.status(400).json({message: error.message});
        }
    }else{
        return res.status(403).json({message:"UnAuthorized User"})
    }
}

module.exports =isAuthenticated
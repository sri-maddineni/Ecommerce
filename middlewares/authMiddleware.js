import JWT from "jsonwebtoken"


export const requireSignIn=async(req,res,next)=>{
    const decode= JWT.verify(req.headers.authorization)
}
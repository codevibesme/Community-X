import jwt from "jsonwebtoken";
export const verifyJwt = (req, res, next) => {
    try {
        let token = req.header("Authorization");
        if(!token || (token && !token.startsWith("Bearer "))) 
            return res.status(403).json({message: "Not Authorized!"});
        token = token.slice(7, token.length).trimLeft();
        const verified = jwt.verify(token, process.env.ACCESS_TOKEN);
        if(!verified) 
            return res.status(403).json({message: "Not Authorized!"});
        req.user = verified;
        next();
    } catch(err) {
        res.status(403).json({message: "Not Authorized!"});
    }
}
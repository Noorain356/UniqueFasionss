import jwt from "jsonwebtoken";

const isAuth = async (req, res, next) => {
    try {
        const token = req.cookies?.token;

        if (!token) {
            return res.status(401).json({ message: "Unauthorized: no token provided" });
        }

        const secret = process.env.JWT_SECRET;
        if (!secret) {
            throw new Error("JWT_SECRET is missing");
        }

        const verifyToken = jwt.verify(token, secret);

        req.userId = verifyToken.userId;
        next();
    } catch (error) {
        if (error instanceof jwt.JsonWebTokenError || error instanceof jwt.TokenExpiredError) {
            return res.status(401).json({ message: "Unauthorized: invalid or expired token" });
        }

        console.error("isAuth error:", error.message);
        return res.status(500).json({ message: "Authentication failed" });
    }
};

export default isAuth;
// import jwt from "jsonwebtoken";
// export const genToken = async (userId) => {
//     try {
//         let token = jwt.sign({ userId }, process.env.JWT_SECRET, { expiresIn: "1h" });
//         return token
//     }catch (error) {
        
//      console.log("token error:", error.message);
//     }

// }
import jwt from "jsonwebtoken";

export const genToken = (userId) => {
    try {
        if (!process.env.JWT_SECRET) {
            throw new Error("JWT_SECRET is missing in .env");
        }

        const token = jwt.sign(
            { userId },
            process.env.JWT_SECRET,
            { expiresIn: "7d" }
        );

        return token;
    } catch (error) {
        console.log("Token generation error:", error.message);
        throw error;
    }
};
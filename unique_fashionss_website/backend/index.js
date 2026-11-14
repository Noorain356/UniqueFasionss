// import express from 'express'
// import dotenv from 'dotenv';
// import connectdb from "./config/db.js";
// import cookieParser from 'cookie-parser';
// import authRoutes from './routes/authRoutes.js';
// import userRoutes from './routes/userRoutes.js';
// import cors from 'cors';

// dotenv.config()

// let app = express()

// let port =  process.env.PORT || 8000;



// app.get("/",(req,res)=>{
//     res.send("hi from server")
// })



// app.use(express.json());
// app.use(cookieParser());
// app.use(cors({
//      origin: "http://localhost:5173",
//      credentials: true
// }))

// app.use("/api/auth",authRoutes)
// app.use("/api/user",userRoutes)

// app.listen(port,()=>{
//      console.log("Hello From Server");
//      connectdb()
// })


import express from "express";
import dotenv from "dotenv";
import connectdb from "./config/db.js";
import cookieParser from "cookie-parser";
import authRoutes from "./routes/authRoutes.js";
import userRoutes from "./routes/userRoutes.js";
import cors from "cors";

dotenv.config();

const app = express();

const port = process.env.PORT || 8000;

app.use(express.json());
app.use(cookieParser());

app.use(cors({
    origin: "http://localhost:5173",
    credentials: true
}));

// API Routes
app.use("/api/auth", authRoutes);
app.use("/api/user", userRoutes);

// Test route
app.get("/", (req, res) => {
    res.send("Hello From UniqueFashionss Server");
});

// Start server
const startServer = async () => {
    try {
        await connectdb();

        app.listen(port, () => {
            console.log(`Server running on port ${port}`);
        });

    } catch (error) {
        console.error("Server startup error:", error);
    }
};

startServer();

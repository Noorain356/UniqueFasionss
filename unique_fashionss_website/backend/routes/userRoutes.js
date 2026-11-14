import express from "express";
import { getcurrentUser } from "../controller/userController.js";
import isAuth from "../middleware/isAuth.js";

let userRoutes = express.Router();

userRoutes.get("/getcurrentuser", isAuth, getcurrentUser);

export default userRoutes;
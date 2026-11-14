import express from 'express'
import { googleLogin, login, LogOut, registration } from '../controller/authController.js';


const authRoutes = express.Router()
                       
authRoutes.post("/registration",registration)
authRoutes.post("/login",login)
authRoutes.post("/logout", LogOut)
authRoutes.post("/googleLogin", googleLogin)

export default authRoutes
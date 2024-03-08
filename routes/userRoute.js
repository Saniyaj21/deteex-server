import express from "express";
import { googleSignup } from "../controllers/googleAuthControllers.js";
import { isAuthenticate } from "../middlewares/authenticate.js";
import { logOutUser, userInfo } from "../controllers/userController.js";

const router = express.Router();

// google sign up handles register and login by itself
router.post('/signup/google', googleSignup)
router.get('/logout', logOutUser)
router.get('/profile',isAuthenticate, userInfo);


export default router;
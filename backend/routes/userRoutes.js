import express from 'express';
import { followUnfolloUser,logOutUser, loginUser , myprofile, registerUser, userProfile } from '../controller/userController.js';
import { isAuth } from '../middleware/isAuth.js';

const router = express.Router();

router.post("/register",registerUser)
router.post("/login",loginUser)
router.get("/me",isAuth,myprofile)
router.get("/:id",isAuth,userProfile)
router.post("/follow/:id",isAuth,followUnfolloUser)
router.post("/logout",isAuth,logOutUser);
export default router;
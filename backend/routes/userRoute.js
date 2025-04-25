import express from "express";
import {
  loginUser,
  registerUser,
  adminLogin,
  userInfo,
} from "../controllers/userController.js";
import authUser from "./../middlewares/auth.js";

const userRouter = express.Router();

userRouter.post("/register", registerUser);
userRouter.post("/login", loginUser);
userRouter.post("/admin", adminLogin);
userRouter.post("/user-info", authUser, userInfo);

export default userRouter;

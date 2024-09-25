import { Router } from "express";
import { validate } from "../middlewares/validate.middleware.js";
import { loginSchema, registerSchema } from "../schemas/zodSchema.js";
import {
  getMe,
  login,
  logout,
  register,
} from "../controllers/auth.controller.js";
import { checkToken } from "../middlewares/auth.middleware.js";

const authRouter = Router();

authRouter.post("/register", validate(registerSchema), register);
authRouter.post("/login", validate(loginSchema), login);
authRouter.get("/logout", checkToken, logout);
authRouter.get("/me", checkToken, getMe);

export default authRouter;

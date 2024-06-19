import express from "express";
import {
  loginFunction,
  signupFunction,
} from "../controllers/userController.js";

const router = express.Router();

router.route("/signup").post(signupFunction);
router.route("/login").post(loginFunction);

export default router;

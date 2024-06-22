import express from "express";
import {
  getCartDataFunction,
  handleCartFunction,
  loginFunction,
  signupFunction,
} from "../controllers/userController.js";

const router = express.Router();

router.route("/signup").post(signupFunction);
router.route("/login").post(loginFunction);
router.route("/handleCart").post(handleCartFunction);
router.route("/getCartData").post(getCartDataFunction);

export default router;

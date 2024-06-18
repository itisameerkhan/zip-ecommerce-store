import express from "express";
import { getData, setData } from "../controllers/storeController.js";

const router = express.Router();

router.route("/setdata").post(setData);
router.route("/getdata").get(getData);

export default router;

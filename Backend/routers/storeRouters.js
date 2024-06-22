import express from "express";
import { getData, getDataById, setData } from "../controllers/storeController.js";

const router = express.Router();

router.route("/setdata").post(setData);
router.route("/getdata").get(getData);
router.route("/getDataById").post(getDataById)

export default router;

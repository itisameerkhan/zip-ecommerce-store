import express from "express";
import dotenv from "dotenv";
import storeRouter from "./routers/storeRouters.js";
import connectDB from "./config/DBconnection.js";
import errorHandler from "./middlewares/errorHandler.js";
import cors from "cors";

const app = express();
dotenv.config();
connectDB();
app.use(express.json());
app.use(cors());

app.use("/api/store", storeRouter);
app.use(errorHandler);

app.listen(process.env.PORT, () => {
  console.log("PORT listening on: ", process.env.PORT);
});

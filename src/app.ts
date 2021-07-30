import express, { Application } from "express";
import cors from "cors";
import "reflect-metadata";

import { MainRouter } from "./routes/mainRouter";
import errorHandler from "./controllers/error/errorController";
import connectDatabase from "../src/config/database";


const app: Application = express();

app.use(cors());
app.use(express.json());
app.use("/api", MainRouter);
app.use(errorHandler);

export async function init () {
  await connectDatabase();
}

export default app;

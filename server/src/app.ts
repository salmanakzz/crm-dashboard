require("dotenv").config();
import express, { Express, NextFunction, Request, Response } from "express";
const app: Express = express();
const port = process.env.PORT || 4000;
import cors from "cors";
import bodyParser from "body-parser";
import dbConnect from "./config/connection";

import UserRoutes from "./routes/user";

app.use(cors());
app.use(bodyParser.json());

dbConnect((err) => {
  if (err) {
    console.log("Database Connection Error:" + err);
  } else {
    console.log("Database Connected Successfully");
  }
});

app.get("/", (req: Request, res: Response) => {
  res.send("Hello, this is Express + TypeScript");
});

app.use(function (req: Request, res: Response, next: NextFunction) {
  console.log(`method=${req.method} route=${req.url}`);
  next();
});

app.use(UserRoutes);

app.listen(port, () => {
  console.log(`[Server]: Running at port:${port}`);
});

import express, { Express, NextFunction, Request, Response } from "express";
const app: Express = express();
const port = process.env.PORT || 4000;

app.get("/", (req: Request, res: Response) => {
  res.send("Hello, this is Express + TypeScript");
});

app.use(function (req: Request, res: Response, next: NextFunction) {
  console.log(`method=${req.method} route=${req.url}`);
  next();
});

app.listen(port, () => {
  console.log(`[Server]: Running at port:${port}`);
});

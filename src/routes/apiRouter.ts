import express, { Request, Response } from "express";

const apiRouter = express();

apiRouter.get("/", (req: Request, res: Response) => {
  res.json("api Route is defined here");
});

export default apiRouter
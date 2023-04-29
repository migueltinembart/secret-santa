import express, { Request, Response } from "express";
import bodyParser from "body-parser";

const apiRouter = express();
const jsonParser = bodyParser.json();
apiRouter.get("/", (req: Request, res: Response) => {
  res.json("api Route is defined here");
});

apiRouter.post("/registration-confirm", jsonParser, (req, res) => {
  req.body ? res.sendStatus(200) : res.sendStatus(400)
});

export default apiRouter;

import express, { Request, Response } from "express";

const apiRouter = express();

apiRouter.get("/", (req: Request, res: Response) => {
  res.json("api Route is defined here");
});

apiRouter.get("/data", (req: Request, res: Response) => {
  console.log("HI");
  res.json({
    id: 123545646,
    people: [
      {
        id: 1,
        firstName: "Miguel",
        lastName: "Tinembart",
        email: "miguel.tinembart@rebsamen.net",
      },
    ],
  });
});

export default apiRouter;

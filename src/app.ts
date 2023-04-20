import express from "express";
import dotenv from "dotenv";

dotenv.config();

const mongoDB = process.env.MONGO;
const port = process.env.PORT;

const app = express();

app.get("/", (req, res, next) => {
  res.send("express Server started successfully");
});

app.listen(port, () => {
  console.log("app listening on http://localhost:" + 5000);
});

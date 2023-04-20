import express from "express";
import dotenv from "dotenv";
import path from "path";
import apiRouter from "./routes/apiRouter";

dotenv.config();

const mongoDB = process.env.MONGO;
const port = process.env.PORT;

const app = express();

app.use("/api", apiRouter);

app.get("*", express.static(path.join(__dirname, "..", "dist")));

app.listen(port, () => {
  console.log("app listening on http://localhost:" + port);
});

import express from "express";
import path from "path";
import apiRouter from "./routes/apiRouter";

const port = process.env.PORT || 5000;

const app = express();

app.use("/api", apiRouter);

app.get("*", express.static(path.join(__dirname, "..", "dist")));

app.listen(port, () => {
  console.log("app listening on http://localhost:" + port);
});

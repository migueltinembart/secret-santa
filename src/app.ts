import express from "express";
import path from "path";
import apiRouter from "./routes/apiRouter";

const port = process.env.PORT || 5000;

const app = express();

app.use(express.static(path.join(__dirname, "..", "dist")));

app.use("/api", apiRouter);
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "..", "dist", "index.html"));
});
app.listen(port, () => {
  console.log("app listening on http://localhost:" + port);
});

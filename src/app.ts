import express from "express"

const app = express()

app.get("/", (req, res, next) => {
    res.send("express Server started successfully")
})

app.listen("5000", () => {
    console.log("app listening on http://localhost" + 5000)
})
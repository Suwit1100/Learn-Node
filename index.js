const express = require("express")
const app = express()
const port = 3000

app.get("/", (req, res) => {
    res.send("Hello word")
})

app.listen(port, (req, res) => {
    console.log("start server port 3000");
})
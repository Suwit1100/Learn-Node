const express = require("express")
const router = require("./router/router")
const app = express()
const port = 3000

app.set('view engine', 'ejs');
app.use(router)

app.listen(port, (req, res) => {
    console.log("start server port 3000");
})
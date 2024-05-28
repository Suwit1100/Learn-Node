const express = require("express")
const router = require("./router/router")
const path = require('path')
const app = express()
const port = 3000

app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')
app.use(express.urlencoded({ extended: false }));
app.use(router)

app.listen(port, (req, res) => {
    console.log("start server port 3000");
})
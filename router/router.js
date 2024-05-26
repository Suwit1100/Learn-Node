const express = require("express")
const path = require("path")
const send = require("send")
const router = express.Router()

const indexpage = path.join(__dirname, "../templates/index.html")
const product1page = path.join(__dirname, "../templates/product1.html")
const product2page = path.join(__dirname, "../templates/product2.html")
const product3page = path.join(__dirname, "../templates/product3.html")

router.get("/", (req, res) => {
    res.sendFile(indexpage);
    res.status(200);
})

router.get("/product/:id", (req, res) => {
    let productID = req.params.id
    if (productID === "1") {
        res.sendFile(product1page)
    } else if (productID === "2") {
        res.sendFile(product2page)
    } else if (productID === "3") {
        res.sendFile(product3page)
    } else {
        res.send("NotFound" + productID)
    }
})

module.exports = router



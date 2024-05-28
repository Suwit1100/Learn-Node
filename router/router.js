const { render } = require("ejs")
const express = require("express")
const path = require("path")
const send = require("send")
const router = express.Router()
const Product = require('../models/product');


const indexpage = path.join(__dirname, "../templates/index.html")
const product1page = path.join(__dirname, "../templates/product1.html")
const product2page = path.join(__dirname, "../templates/product2.html")
const product3page = path.join(__dirname, "../templates/product3.html")

router.get("/", (req, res) => {
    res.render("login")
})

router.get("/home", (req, res) => {
    res.render("productlist")
})

router.get("/manage", (req, res) => {
    res.render("manage")
})

router.get("/product", (req, res) => {
    res.render("product")
})

router.get("/edit_product", (req, res) => {
    res.render("editproduct")
})

router.post("/add_product", (req, res) => {
    console.log(req.query);
});

router.get("/product/:id", (req, res) => {
    let productID = req.params.id
    if (productID === "1") {
        res.sendFile(product1page)
    } else if (productID === "2") {
        res.sendFile(product2page)
    } else if (productID === "3") {
        res.sendFile(product3page)
    } else {
        res.redirect("/")
    }
})

module.exports = router



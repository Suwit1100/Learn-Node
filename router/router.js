const express = require("express")
const path = require("path")
const router = express.Router()
const Product = require('../models/product');
const multer = require('multer');


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
    // ดึงข้อมูลทั้งหมดจาก MongoDB
    const data = Product.find()
    res.render("manage", {
        product: data
    })
})

router.get("/product", (req, res) => {
    res.render("product")
})

router.get("/edit_product", (req, res) => {
    res.render("editproduct")
})



router.post("/add_product", (req, res) => {
    console.log(req.body);
    const product = new Product({
        name: req.body.name,
        price: req.body.price,
        description: req.body.description
    });
    product.save();
    res.redirect("manage")
});

router.post("/delete_product", (req, res) => {
    // // ลบข้อมูลตามเงื่อนไขที่กำหนด
    // Product.deleteOne({ _id: 'ข้อมูล id ที่ต้องการลบ' })
    //     .then(result => {
    //         console.log('Deleted product:', result);
    //         res.render("manage")
    //     })
    //     .catch(err => console.error('Error deleting product', err));
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
        res.redirect("/")
    }
})

module.exports = router



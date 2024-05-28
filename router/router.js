const express = require("express")
const path = require("path")
const router = express.Router()
const Product = require('../models/product');
const multer = require('multer');
const { log } = require("console");


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
    Product.find()
        .then(products => {
            console.log("All products:", products);
            res.render("manage", {
                product: products
            });
        })
        .catch(err => {
            console.error("Error fetching products", err);
            res.status(500).send("Error fetching products");
        });
});

router.get("/product", (req, res) => {
    res.render("product")
})

router.post("/edit_product", (req, res) => {
    const id = req.body.edit_id;
    console.log(id);
    Product.findOne({ _id: id })
        .then(doc => {
            console.log(doc);
            res.render('editproduct', { product: doc });
        })
        .catch(err => {
            console.error(err);
        });

})

router.post('/update_product', (req, res) => {
    const update_id = req.body.update_id;
    let data = {
        name: req.body.name,
        price: req.body.price,
        description: req.body.description
    };

    // อัพเดตข้อมูล
    Product.findByIdAndUpdate(update_id, data, { useFindAndModify: false })
        .then(() => {
            res.redirect('/manage');
        })
        .catch(err => {
            console.error(err);
            // ทำการจัดการข้อผิดพลาดตามที่ต้องการ
        });
});



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

router.get("/delete_product/:id", (req, res) => {
    const id = req.params.id;
    Product.deleteOne({ _id: id })
        .then(result => {
            console.log('Deleted product:', result);
            res.redirect("/manage");
        })
        .catch(err => {
            console.error('Error deleting product', err);
            res.status(500).send("Error deleting product");
        });
});


module.exports = router



// เรียกใช้งาน mongoose
const mongoose = require('mongoose');

// เชื่อมต่อกับฐานข้อมูล MongoDB
mongoose.connect('mongodb://localhost:27017/my_product', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

// กำหนดโครงสร้างข้อมูลใน MongoDB
const Schema = mongoose.Schema;
const product = new Schema({
    name: String,
    price: Number,
    description: String,
    image: String
});

const Product = mongoose.model('Product', product);

module.exports = Product
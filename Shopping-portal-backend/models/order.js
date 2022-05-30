const mongoose = require("mongoose");
const {ObjectID} = mongoose.Schema; 

const ProductCartSchema = new mongoose.Schema({
    product: {
        type: ObjectID,
        ref: "Product"
    },
    name: String,
    count: Number,
    price: Number
})

const ProductCart = mongoose.model("ProductCart", ProductCartSchema)

const OrderSchema = new mongoose.Schema({
    products: [ProductCartSchema],
    transaction_id: {},
    amount: {type: Number},
    address: String, 
    updated: Date, 
    user: {
        type: ObjectID,
        ref: "User"
    }
},
 {timestamps: true}
 );

const Order = mongoose.model("Order", OrderSchema)

module.exports = {Order, ProductCart};
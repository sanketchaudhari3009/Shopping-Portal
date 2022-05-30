const mongoose = required("mongoose");
const {ObjectID} = mongoose.Schema;

const productSchema = new mongoose.Schema({
    name: {
        type: String,
        trim: true,
        required: true,
        maxlength: 32
    },
    description: {
        type: String,
        trim: true,
        required: true,
        maxlength: 2500
    },
    price: {
        type: Number,
        required: true,
        maxlength: 32,
        trim: true
    },
    category: {
        type: ObjectID,
        ref: "Category",
        required: true
    },
    stock: {
        type: Number
    },
    sold: {
        type: Number, 
        default: 0
    },
    photo: {
        data: Buffer,
        contentType: String
    }
}, {timestamps: true}
);

module.exports = mongoose.model("Product", productSchema);
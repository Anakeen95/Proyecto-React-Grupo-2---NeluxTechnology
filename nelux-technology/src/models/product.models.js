const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    Products: [
        {
            id: { type: String, required: true },
            name: { type: String, required: true },
            description: { type: String, required: true },
            price: { type: String, required: true },
            imageUrl: { type: String, required: true },
            quantity: { type: Number, required: true }
        }
    ]
});

const ProductModel = mongoose.model('Product', productSchema);

module.exports = ProductModel;

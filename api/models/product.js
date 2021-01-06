const mongoose = require('mongoose');

const productSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    name: { type: String, required: true },
    price:{ type: Number, required: true },
    desc: { type: String, required: true },
    productImage: { type: Array, require: false },
    type: { type: String, required: true },
    pet: { type: String, required: true }

});

module.exports =mongoose.model('Product', productSchema);
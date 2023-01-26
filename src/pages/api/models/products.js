const mongoose = require('mongoose');

const productSchema = mongoose.Schema({
    userId: {type: String, required : true},
    title: { type: String, required: true },
    description: { type: String, required: true },
    imageUrl: { type: String, required: false },
    tags: { type: String, required: true },
    facilities: { type: String, default: 0 },
    capacity: { type: Number, default: 0 },
    price: { type: Number, default: 0 },
  });

module.exports = mongoose.model('Product', productSchema);
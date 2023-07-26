const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');

const ownerSchema = mongoose.Schema({
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true }
});

ownerSchema.plugin(uniqueValidator);

module.exports = mongoose.model('Owner', ownerSchema);
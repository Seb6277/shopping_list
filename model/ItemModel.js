const mongoose = require('mongoose');
const ItemSchema = require('../schema/ItemSchema');

ItemModele = mongoose.model('itemModel', ItemSchema);

module.exports = ItemModele;
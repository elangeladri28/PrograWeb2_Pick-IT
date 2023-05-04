const {Schema, model, default: mongoose} = require('mongoose');

const CarDetailSchema = Schema({
    cart_id:{
        type:Schema.Types.ObjectId,
        ref: 'Cart'
    },
    product_id:{
        type:Schema.Types.ObjectId,
        ref: 'Product'
    }
});

module.exports = model('Cart_detail', CarDetailSchema);
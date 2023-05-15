const {Schema, model} = require('mongoose');

const CartSchema = Schema({
    user_email:{
        type:String,
        required:true,
        unique:true
    }
});

module.exports = model('Cart', CartSchema);
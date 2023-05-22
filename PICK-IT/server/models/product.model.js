const {Schema, model} = require('mongoose');

const Products = Schema({
    product_name:{
        type:String,
        required: [true, 'El nombre del producto no puede ser vacio'],
        unique: [true, 'El nombre debe se unico']
    },
    product_description:{
        type:String,
        required:[ true, 'El producto debe tener descripcion'],
    },
    product_price:{
        type:Number,
        default: 0.0,
    },
    product_category:{
        type:String,
        required:[ true, 'El producto debe tener una categoria que corresponda']
    },
    product_img:{
        type:String,
        required: [true, 'El proucto debe tener una imagen']
    }
});

module.exports = model("Product", Products)

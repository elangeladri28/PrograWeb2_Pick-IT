const {Schema, model} = require('mongoose');

const CategorySchema = Schema({
    category_name:{
        type:String,
        require:[true, 'El nombre de la categoria es necesario'],
        unique:true
    },
    category_description:{
        type:String,
        require:[true, 'La descripcion de la categoria es necesaria']
    }
});

module.exports = model('Category', CategorySchema);
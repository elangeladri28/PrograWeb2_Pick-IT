const {Schema, model, default: mongoose} = require('mongoose');

const CarDetailSchema = Schema({
    cart_id:{
        cart:{
            type: mongoose.Schema.Types.ObjectId, ref:'Cart'
        }
        
    }
})
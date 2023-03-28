const {Schema, model} = require('mongoose');

const UserSchema = Schema({
    firstname:{
        type:String,
        required:[true, 'El nombre del usuario es obligatorio'],
    },
    lastname:{
        type:String,
        required:[true, 'El apellido del usuario es obligatorio'],
    },
    location:{
        type:String
    },
    picturePath: {
        type: String,
        default: "",
    },
    email:{
        type:String,
        required:[true, 'El correo del usuario es obligatorio'],
        unique: true
    },
    password:{
        type:String,
        required:[true, 'La contrasenia es obligatoria']
    },
    rol:{
        type:String,
        default: 'USER_ROL'
    },
    state:{
        type:Boolean,
        default: true
    }
});

module.exports = model('User', UserSchema);
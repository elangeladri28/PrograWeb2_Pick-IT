const { request, response } = require('express');
const bcryptjs = require('bcryptjs');
const User = require('../models/user.model');
const Cart = require('../models/cart.model');
const { generarJWT } = require('../helpers/generar-jwt');
const fs = require('fs');



const register = async (req = request, res = response) => {
    try {

        //BUSCAR SI EL CORREO YA EXISTE ANTES DE CREAR UN NUEVO USUARIO
        if(await User.findOne({email:req.body.email}))
            return res.status(400).json({
                msg:"Este correo ya existe"
            });

        const { firstname, lastname, location, email, password, } = req.body;
        const { avatar } = req;
        //GENERA EL MODELO DE MONGO
        const user = new User({firstname, lastname, location, email, password});
        user.avatar = avatar;
        // console.log(user);

        //CUANDO UN USUARIO SE REGISTRA, SE CREA UN CARRITO
        //QUE LE PERTENECE
        const cart = new Cart({user_email: user.email});
        await cart.save();


        // const salt = bcryptjs.genSalt();
        // user.password = bcryptjs.hash(password, salt);
        const savedUser = await user.save();
        const token = await generarJWT(savedUser.id);

        //res.send(user);

        res.status(201).json({
            user:savedUser,
            token
        });

    } catch (err) {
        console.log(err);
        res.status(500).json({ errorENDPOINT: err });
    }
}

const login = async (req = request, res = response) => {
    try {
        const { email, password } = req.body;
        const user = await User.findOne({ email: email });

        if (!user) {
            return res.status(400).json({
                msg: "Usuario incorrecto, crea una para inicar sesión."
            });
        }

        if (!user.state) {
            return res.status(400).json({
                msg: "Usuario ya no es valido: estado: false."
            });
        }

        if (user.password != password) {
            return res.status(400).json({
                msg: "Contraseña incorrecta."
            });

        }

        const token = await generarJWT(user.id);

        res.status(200).json({
            user,
            token
        });

    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

const update = async (req, res) => {

    const {id} = req.params;
    const {_id, ...rest} = req.body;
    await User.findByIdAndUpdate(id, rest);
    const user = await User.findById(id);

    res.json({
        user,
    });
}


module.exports = {
    register,
    login,
    update
}
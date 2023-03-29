const {request, response} = require('express');
const bcryptjs = require('bcryptjs');
const User = require('../models/user.model');


const register = async (req = request, res = response) => {
    console.log(req.body);
    try {
    const { firstname, lastname, location, picture, email, password } = req.body;
    const user = new User({firstname, lastname, location, picture, email, password});
    console.log(user);

    //const salt = bcryptjs.genSalt();
    //user.password = bcryptjs.hash(password, salt);
    
    const savedUser = await user.save();
    
    //res.send(user);

    res.status(201).json(savedUser);
    } catch (err) {
    res.status(500).json({ error: err.message });
    }
    //VALIDAR LA SESION, SI LA SESION EXISTE SE ENVIA A LA PAGINA PRINCIAPAL
    // CON LA SESION INICIADA
    // if(req.session.user){
    //     res.redirect('/');
    //     return;
    // }

    // const  {nombre, direccion, correo, pass} = req.body;

    // //REGISTRAR USUARIO EN MONGO

    // req.session.user = correo;

    // res.status(200).send('Usuario registrado');
}

const login = async (req = request, res = response) => {
    try {
    const { email, password } = req.body;
    const user = await User.findOne({email: email});

    if(!user){
        return res.status(400).json({
            msg: "Usuario incorrecto, crea una para inicar sesión."
        });
    }

    if(user.password != password ){
        return res.status(400).json({
            msg:"Contraseña incorrecta."
        });
        
    }
    res.json(user);

    } catch (err) {
    res.status(500).json({ error: err.message });
  }    
};


module.exports = {
    register,
    login
}
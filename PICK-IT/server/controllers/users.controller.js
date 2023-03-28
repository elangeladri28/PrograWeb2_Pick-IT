const {request, response} = require('express');
const bcryptjs = require('bcryptjs');
const User = require('../models/user.model');



const register = (req = request, res = response) => {

    
    const { name, lastname, email, address, password} = req.body;
    const user = new User({name, lastname, email, address, password});

    const salt = bcryptjs.genSaltSync();
    user.password = bcryptjs.hashSync(password, salt);
    
    user.save();


    res.send(user);
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

    return;
}

const login = async (req = request, res = response) => {

    const { email, password } = req.body;
    const user = await User.findOne({email});

    if(!user){
        res.json({
            msg: "User doesnt exists, create one to login"
        });
        return;
    }

    if(user.password != password ){
        res.json({
            msg:"Password is wrong"
        });
        return 
    }

    res.json(user);

}


module.exports = {
    register,
    login
}
const {request, response} = require('express');


const register = (req = request, res = response) => {
    
    //VALIDAR LA SESION, SI LA SESION EXISTE SE ENVIA A LA PAGINA PRINCIAPAL
    // CON LA SESION INICIADA
    if(req.session.user){
        res.redirect('/');
        return;
    }

    const  {nombre, direccion, correo, pass} = req.body;

    //REGISTRAR USUARIO EN MONGO

    req.session.user = correo;

    res.status(200).send('Usuario registrado');

    return;
}

const newUser = (req = request, res = response) => {
    res.send('Nuevo usuario pagina');
}


module.exports = {
    register,
    newUser
}
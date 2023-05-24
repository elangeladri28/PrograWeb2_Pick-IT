const User = require('../models/user.model');

const userExists = async(id) => {
    const user = await User.findById(id);
    if(!user)
        throw new Error(`El id ${id} no existe`);

    return true;
}   

module.exports = {
    userExists
}
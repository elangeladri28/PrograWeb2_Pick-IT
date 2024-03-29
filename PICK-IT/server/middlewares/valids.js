// const Valids = require('../helpers/validaciones');
const { validationResult } = require('express-validator');

const valids = (req, res, next) => {
    const error = validationResult(req);
    if (!error.isEmpty())
        return res.status(400).json(error);

    next();
}

module.exports = {
    valids
}
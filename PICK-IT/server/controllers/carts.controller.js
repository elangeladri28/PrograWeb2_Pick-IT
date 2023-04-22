const { request, response } = require('express');
const Cart = require('../models/cart.model');

const addCart = async (req, res) => {

    res.json({msg: 'user cart'});

}

module.exports = {
    addCart
}
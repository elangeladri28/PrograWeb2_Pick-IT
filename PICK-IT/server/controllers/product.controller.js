const { request, response } = require('express');
const Product = require('../models/product.model.js');
const Category = require('../models/category.model.js');
const fs = require('fs');

const addProduct = async (req = request, res = response) => {

    try {

        
        
        const { product_name, proucto_descripcion, product_price, product_category } = req.body;
        const cat = await Category.findOne({ category_name: product_category });
        const { thumbnail } = req;

        if (!cat) {
            res.status(401).json({
                "msg": `${product_category} no existe, agrega una valida`
            });

            return;
        }

        const product = new Product({ product_name, proucto_descripcion, product_price, product_category });
        product.product_img = thumbnail;
        await product.save();

        res.status(200).json({
            "msg": "Producto agregado con exito"
        })

    } catch (err) {
        console.log(err);
        res.status(500).json({ errorENDPOINT: err });
    }

}

const getAll = async(req = request, res = response) => {
    try {
        
        const products = await Product.find();
        res.status(200).json({
            products
        })

    } catch (err) {
        console.log(err);
        res.status(500).json({ errorENDPOINT: err });
    }
}

module.exports = {
    addProduct,
    getAll
}
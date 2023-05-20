const { request, response } = require('express');
const Product = require('../models/product.model.js');
const Category = require('../models/category.model.js');
const fs = require('fs');
const { constants } = require('buffer');

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

const get = async(req = request, res = response) => {
    try {
        const {prod_id} = req.params;
        console.log(prod_id);
        const product = await Product.findById(prod_id)
        res.status(200).json(product);
    } catch (error) {
        res.status(500).json({error:error});
    }
}

const getByCategory = async (req = request, res = response) => {
	try{
		const {cat_name} = req.params;
		const product = await Product.find({product_category:cat_name});
		console.log(cat_name);
		res.status(200).json(product);

	}catch(error){
		console.log(error);
		res.status(500).json({error});
	}
}

const getByName = async(req = request, res = response) => {
		try{
			const {product_name} = req.params;
			const product = await Product.find({product_name});
			res.send(product);
		}catch(error){
			console.log(error);
			res.status(500).json({error});
		}
}

module.exports = {
    addProduct,
    getAll,
    get,
	getByCategory,
	getByName
}


//MANERAS DE OBTENER UN PRODUCTO
//GET POR ID
//GET POR NOMBRE
//GET POR CATEGORIA

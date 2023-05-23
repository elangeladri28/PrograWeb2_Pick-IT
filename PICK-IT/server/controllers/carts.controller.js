const { request, response } = require('express');
const User = require('../models/user.model');
const Cart = require('../models/cart.model');
const Cart_detail = require('../models/cart_detail.model');

const add = async (req = request, res = response) => {

    try {

        //OBTENGO EL ID DEL USUARIO MEDIANTE EL TOKEN QUE ES ENVIADO DEL
        //FRONT END Y VALIDADO EN LA FUNCION VALIDAR-JWT.JS EN LA LINEA 24
        //Y SE RECIVE EL ID DEL PRODUCTO POR UN METODO POST

        //VALIDAR QUE EL PRODUCTO EXISTA EN UN MIDDLEWARE

        const user = await User.findById(req.user);
        const cart = await Cart.findOne({ user_email: user.email });
        const { productId } = req.body;

        const cart_detail = new Cart_detail({
            cart_id: cart._id,
            product_id: productId
        });

        const cartRegistered = await cart_detail.save();

        res.status(200).json({
            cartRegistered
        })

    } catch (err) {
        console.log(err);
        res.status(500).json({
            msg: "Algo sucedio al agregar articulo al carrito"
        });
    }

}

const getCartItems = async (req = request, res = response) => {
    try {

        const user = await User.findById(req.user);
        let carts = await Cart_detail.find({}).populate('cart_id', {
            user_email: 1,
            _id: 0
        }).populate('product_id')

        carts = carts.filter( cart => cart.cart_id.user_email == user.email);

        res.json({carts});

    } catch (err) {
        console.log(err);
        res.status(500).json({
            msg: "Algo sucedio al agregar articulo al carrito"
        });
    }
}

const deleteItem = async (req = request, res = response) => {
	try{
		const { cartId } = req.body;
		const itemDeleted = await Cart_detail.findByIdAndDelete(cartId);

		console.log('Cart', cartId);

		res.status(200).json(itemDeleted);
	}catch(error){
		console.log(err);
        res.status(500).json({
            msg: "Algo sucedio al eliminar el elemento del carrito"
        });
	}
}

module.exports = {
    add,
    getCartItems,
	deleteItem
}

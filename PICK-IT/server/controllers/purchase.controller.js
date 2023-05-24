const { request, response } = require('express');
const User = require('../models/user.model.js');
const Purchase = require('../models/purchase.model.js');
const Purchase_detail = require('../models/purchase_detail.model.js');
const Cart = require('../models/cart.model.js');
const Cart_detail = require('../models/cart_detail.model.js');

const purchaseItems = async( req = request, res = response ) => {
	try{
		const user = await User.findById(req.user);
		let items = await Cart_detail.find().populate('cart_id', {
			user_email:1,
			_id: 1
		}).populate('product_id');

		items = items
					.filter( item => item.cart_id.user_email == user.email)
					.map( item => {
						return{
							product_id: item.product_id._id,
							product_price: item.product_id.product_price,
							cart_id: item.cart_id._id
						}
					});
					
					
		const purchase = new Purchase({
			user_email: user.email,
			purchase_grant: items
								.map( item => item.product_price)
								.reduce((acumulator, current) => acumulator + current, 0)
		});

		purchaseSaved = await purchase.save()

		items.forEach( async item => {
			const purchase_detail = new Purchase_detail({
				purchase_id: purchaseSaved._id,
				product_id: item.product_id
			});

			await Cart_detail.findOneAndDelete({
				product_id: item.product_id,
				cart_id: item.cart_id
			});

			await purchase_detail.save();
		});

		


		res.json(items);

	}catch(error){
		console.log(error);
		res.status(500).json({error});
	}
}

const history = async( req = request, res = response ) => {
	try{

		const user = await User.findById(req.user);
		let purchases = await Purchase_detail.find().populate('purchase_id').populate('product_id');
		purchases = purchases.filter( purchase => purchase.purchase_id.user_email == user.email )

		res.json(purchases);

	}catch(error){
		console.log(error);
		res.status(500).json({error});
	}
}


module.exports = {
	purchaseItems,
	history
}

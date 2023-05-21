const { request, response } = require('express');
const User = require('../models/user.model');
const Wishlist = require('../models/wishlist.model');
const Wishlist_detail = require('../models/wishlist_detail.model'); 

const newWishlist = async (req = require, res = response) => {
	try{
		const user = await User.findById(req.user);
		const { wishlist_name } = req.body;
		const wishlist = new Wishlist({
			user_email: user.email,
			wishlist_name 
		});

		const wishlistRegistred = await wishlist.save();
		res.status(200).json({
			wishlistRegistred
		});
		
	}catch(error){
		console.log(error);
		res.status(500).json(error);
	}
}

const getWishlist = async (req = require, res = response ) => {
	try{
		const user = await User.findById(req.user);
		console.log(req.user);
		const wishlists = await Wishlist.find({user_email: user.email});

		res.status(200).json({
			wishlists
		});
	}catch(error){
		console.log(error);
		res.status(500).json({error});
	}
}

const deleteWishlist = async(req = require, res = response) => {
	try{
		const { wishlistId } = req.body;
		await Wishlist.findByIdAndDelete(wishlistId);

		res.status(200).json({estado:"Elemento eliminado"});


	}catch(error){
		console.log(error);
		res.status(400).json({
			error: 'No pudo eliminarse la wishlist'
		});
	}
}

const add = async (req = require, res = response) => {
	try{
		const { wishlistId, productId } = req.body;
		const wishlist = await Wishlist.findById(wishlistId);

		const wishlistDetail = new Wishlist_detail({
			wishlist_id: wishlist._id,
			product_id: productId
		});

		const itemAdded = await wishlistDetail.save();


		res.status(200).json(itemAdded);
	}catch(error){
		console.log(error);
		res.status(500).json({error});
	}
}

//const remove = async (req = require, res = response) => {
	//try{
	
	//}
//}


module.exports = {
	newWishlist,
	add,
	getWishlist,
	deleteWishlist 
}

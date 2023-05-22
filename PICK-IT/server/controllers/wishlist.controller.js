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
		const items = await Wishlist_detail.deleteMany({wishlist_id: wishlistId});


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

const remove = async (req = require, res = response) => {
	try{
		const { wishlistId, productId } = req.body;
		const wishlistDetail = await Wishlist_detail.findOneAndDelete({
			wishlist_id: wishlistId,
			product_id: productId
		});

		res.status(200).json({
			msg:"Elemento de la whislist eliminado"
		});

	}catch(error){
		console.log(error);
		res.status(500).json({"error":error});
	}
}

const getWishlistItems = async (req = request, res = response) => {
	try{
		const user = await User.findById(req.user);
		let wishlists = await Wishlist_detail.find().populate('wishlist_id', {
			user_email: 1,
			_id: 1
		}).populate('product_id');


		wishlists = wishlists
						.filter( wishlist => wishlist.wishlist_id.user_email == user.email)
						.map( wishlist => {
							return {
								wishlist_id: wishlist.wishlist_id._id,
								wishlist_owner: wishlist.wishlist_id.user_email,
								product_id: wishlist.product_id._id,
								product_name: wishlist.product_id.product_name,
								product_description: wishlist.product_id.product_description,
								product_price: wishlist.product_id.product_price,
								product_category: wishlist.product_id.product_category,
								product_img: wishlist.product_id.product_img
							}
						});

		res.status(200).json(wishlists);
		
	}catch(error){
		console.log(error);
		res.status(500).json({error});
	}
}


module.exports = {
	newWishlist,
	add,
	remove,
	getWishlist,
	deleteWishlist,
	getWishlistItems
}

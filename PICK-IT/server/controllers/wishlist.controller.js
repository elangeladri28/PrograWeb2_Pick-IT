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


module.exports = {
	newWishlist
}

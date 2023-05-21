const { Schema, model } = require('mongoose');

const WishlistSchema = Schema({
	user_email:{
		type:String,
		required: true,
		unique: true
	},
	wishlist_name:{
		type:String,
		required:true
	}
});

module.exports = model('Wishlist', WishlistSchema );

const { Schema, model } = require('mongoose');

const WishlistDetailSchema = Schema({
	wishlist_id:{
		type:Schema.Types.ObjectId,
		ref: 'Wishlist'
	},
	product_id:{
		type: Schema.Types.ObjectId,
		ref: 'Product'
	}
});

module.exports = model('Wishlist_Detail', WishlistDetailSchema);

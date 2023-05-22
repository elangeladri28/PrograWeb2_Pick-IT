const { Schema, model } = require('mongoose');

const PurchaseDetailSchema = Schema({
	purchase_id:{
		type:Schema.Types.ObjectId,
		ref: 'Purchase'
	},
	product_id:{
		type: Schema.Types.ObjectId,
		ref: 'Product'
	}
});

module.exports = model('Purchase_detail', PurchaseDetailSchema);

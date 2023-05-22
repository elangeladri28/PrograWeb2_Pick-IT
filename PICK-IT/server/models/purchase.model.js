const { Schema, model } = require('mongoose');

const PurchaseSchema = Schema({
	user_email:{
		type:String,
		required: true
	},
	purchase_date:{
		type:Date,
		required: true,
		default: Date.now
	},
	purchase_grant:{
		type: Number,
		default: 0
	}
});

module.exports = model('Purchase', PurchaseSchema);

const { Schema, model } = require('mongoose');

const CommentSchema = Schema({
	user_email:{
		type:String,
		required: true
	},
	product_id:{
		type:String,
		required: true
	},
	content:{
		type:String,
		required: true
	}
});


module.exports = model('Comment', CommentSchema);

const { request, response } = require('express');
const User = require('../models/user.model');
const Comment = require('../models/comments.model');


const postComment = async( req = request, res = response ) => {
	try{
		const { productId, commentContent } = req.body;
		const user = await User.findById(req.user);
		const comment = new Comment({
			user_email: user.email,
			product_id: productId,
			content: commentContent
		});


		const commentSaved = await comment.save();
		res.status(200).json(commentSaved);
	}catch(error){
		console.log(error);
		res.status(200).json({error});
	}
}

const getComments = async(req = request, res = response) => {
	try{
		const { productId } = req.params;
		const comments = await Comment.find({product_id: productId});
		res.status(200).json(comments);
	}catch(error){
		console.log(error);
		res.status(500).json({error});
	}
}

module.exports = {
	postComment,
	getComments
}

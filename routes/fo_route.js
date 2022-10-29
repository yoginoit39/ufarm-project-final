const express = require("express");
const router = express.Router();
const fo_user = require('../models/fo_data');



router.get("/fo", async (req, res) => {
	const fo_data = await fo_user.find();
	console.log(fo_data);
	res.render("fo_dash", {fo_data});
});

router.post("/fo", async (req, res) => {
	console.log(req.body);
	const fo_data = new fo_user(req.body);
	await fo_data.save();

	fo_data.save((err) => {
		if(err){
			console.log('err adding fo');
		}else{
			res.redirect('/fo');
		}
	})
});


module.exports = router;
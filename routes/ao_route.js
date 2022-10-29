const express = require("express");
const router = express.Router();
const add_ao = require("../models/AO_data");



// router.get("/ao", (req, res) => {
// 	res.render("ao_dash");
// });

router.get("/ao", async function (req, res) {
	const ao_users = await add_ao.find();
	console.log(ao_users);
	res.render("ao_dash", { ao_users });
});


router.post("/ao", async function (req, res) {
	console.log(req.body);
	const ao_users = new add_ao(req.body);
	await ao_users.save();

	ao_users.save((err) =>{
		if(err){
			console.log("err")
		}else{       
			res.redirect('/ao'); 
		}
	})
});




module.exports = router;
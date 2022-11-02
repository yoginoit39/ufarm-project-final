const express = require("express");
const router = express.Router();
const add_ao = require("../models/AO_data");
const connectEnsureLogin = require('connect-ensure-login');



// router.get("/ao", (req, res) => {
// 	res.render("ao_dash");
// });

router.get("/ao", connectEnsureLogin.ensureLoggedIn(), async function (req, res) {
	// sets the user session to the current user
	req.session.user = req.user;
	
	const ao_users = await add_ao.find();
	console.log(ao_users);
	res.render("ao_dash", { ao_users });
});


router.post("/ao", connectEnsureLogin.ensureLoggedIn(), async function (req, res) {
	// redirent the user to the session
	req.session.user = req.user;


	const ao_users = new add_ao(req.body);
	await ao_users.save();

	ao_users.save((err) =>{
		if(err){
			console.log("err")
		}else{     
			res.redirect("ao"); 
		}
	})
});

// update 
router.get("/ao/update/:id", async  function(req,res){
	try {
		const ao_users = await add_ao.findOne({_id:req.params.id});
		console.log('Product updated', ao_users);
		res.render("ao_update", { ao_users });
		
	} catch (error) {
		res.status(400).send('not able to load view');
	}
});

router.post("/ao/update/:id", async function(req,res){
	try {
		await add_ao.findOneAndUpdate({_id:req.params.id},req.body);
		res.redirect("/ao");
		console.log(req.body);
	} catch (error) {
		res.status(400).send('Unable to update');
	}
});






module.exports = router;
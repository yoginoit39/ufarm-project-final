const express = require("express");
const router = express.Router();
const add_ao = require("../models/AO_data");
const connectEnsureLogin = require('connect-ensure-login');
const { deleteOne } = require("../models/AO_data");



// router.get("/ao", (req, res) => {
// 	res.render("ao_dash");
// });

router.get("/ao", connectEnsureLogin.ensureLoggedIn()  ,async function (req, res) {
	const ao_user = req.user
	const ao_users = await add_ao.find();
	// console.log(ao_users);
	res.render("ao_dash", { ao_users, ao_user });
});


router.post("/ao",  async function (req, res) {
	const ao_users = new add_ao(req.body);
	await add_ao.register(ao_users, req.body.password, (error, user)  => {
		if(error) return error;
		res.redirect("/ao"); 
	});

});

// logout
router.post('/logout', (req,res) => {
	if (req.session){
		req.session.destroy(function(error) {
			if (error){
				res.send('unable to logout')
			}else{
				return res.redirect('/')
			}
		})
	}
})


// update 
router.get("/ao/update/:id", async  function(req,res){
	try {
		const ao_users = await add_ao.findOne({_id:req.params.id});
		// console.log('Product updated', ao_users);
		res.render("ao_update", { ao_users });
		
	} catch (error) {
		res.status(400).send('not able to load view');
	}
});

router.post("/ao/update/:id", async function(req,res){
	try {
		await add_ao.findOneAndUpdate({_id:req.params.id},req.body);
		res.redirect("/ao");
		// console.log(req.body);
	} catch (error) {
		// console.log(error);
		res.status(400).send('Unable to update');
	}
});


// ao delete
// delete product
router.post('/ao/delete', async function(req,res){
	try {
	  await add_ao.deleteOne({_id:req.body.delete});
	} catch (error) {
	  res.status(400).send('could not delete produce');
	}

	if(deleteOne){
		res.redirect('/ao');
	}

});


module.exports = router;
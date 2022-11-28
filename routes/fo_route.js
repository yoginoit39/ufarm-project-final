const express = require("express");
const router = express.Router();
const connectEnsureLogin = require('connect-ensure-login');
// const fo_user = require('../models/fo_data');
const add_produce = require('../models/add_prod');
const add_ao = require("../models/AO_data");
const orders = require("../models/orders")



router.get("/fo", connectEnsureLogin.ensureLoggedIn() ,async (req, res) => {	
	const farmerOne = req.user
	const fo_data = await add_ao.find();
	// console.log(fo_data);
	res.render("fo_dash", {fo_data, farmerOne});

});


// router.post('/fo', async (req,res) => {
// 	const fo_data = new add_ao(req.body);
// 	await add_ao.register(fo_data, req.body.password, (error, user) => {
// 		if(error) return error;
// 		res.redirect('/fo')
// 	})
// })

router.post("/fo", async function (req, res) {
	// console.log(req.body);
	const fo_data = new add_ao(req.body);

	await add_ao.register(fo_data, req.body.password, (error, user) => {
				if(error) return error;
				res.redirect('/fo')
			})

	fo_data.owner_id = req.user._id;
	const owner = await add_ao.findById(fo_data.owner_id);
	fo_data.owner_name = owner.full_name;
	fo_data.owner_contact = owner.phn_nmbr;
	await fo_data.save();
  

  });
  


// diplay items on status page
router.get('/fo_approve', async function (req,res){
	const farmerOne = req.user

    const prod_display = await add_produce.find();
    // console.log(prod_display);
    res.render("prod_approve_table", {prod_display, farmerOne});

});





// approve prod page
router.get('/prod_approve/app/:id', async function (req,res){
	try {
		const approve_produce = await add_produce.findOne({_id:req.params.id});
		res.render("prod_app", {approve_produce});
	} catch (error) {
		res.status(400).send("Product to update not found.");
	}
})


router.post('/prod_approve/app/:id', async function (req,res){
	const approve_produce = await add_produce.findOne({_id:req.params.id});
	// console.log("this is the original console", approve_produce.prod_status);
	approve_produce.prod_status = req.body.prod_status;
	approve_produce.save();
	// console.log("changed",req.body.prod_status)
	// console.log(approve_produce);
	res.redirect("/fo_approve")
})


router.get('/view_order', async function(req,res){
	
	const view_order = await orders.find();

	console.log(view_order);

	res.render('fo_view_order', {view_order});
	

})

// update






 


module.exports = router;
const express = require("express");
const router = express.Router();
const fo_user = require('../models/fo_data');
const add_produce = require('../models/users');


// diplay items on status page
router.get('/fo_approve/', async function (req,res){
    const prod_display = await add_produce.find();
    // console.log(prod_display);
    res.render("prod_approve_table", {prod_display});
});

// router.post('/fo_approve/:id', async function(req,res){
// 	const prod_display = await add_produce.findByIdAndUpdate({_id:req.body.id});
// 	// prod_display.save();
// })

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



router.get("/fo", async (req, res) => {
	const fo_data = await fo_user.find();
	// console.log(fo_data);
	res.render("fo_dash", {fo_data});
});

router.post("/fo", async (req, res) => {
	// console.log(req.body);
	const fo_data = new fo_user(req.body);
	await fo_data.save();

	fo_data.save((err) => {
		if(err){
			// console.log('err adding fo');
		}else{
			res.redirect('/fo');
		}
	})
});

// update






 


module.exports = router;
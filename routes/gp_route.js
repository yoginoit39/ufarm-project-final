const express = require("express");
const router = express.Router();
const connectEnsureLogin = require('connect-ensure-login');
const produce = require("../models/add_prod");
const cart = require("../models/cart");
const add_ao = require("../models/AO_data")
const order = require("../models/orders")



router.get("/", async (req, res) => {
	const gp_user = req.user
	const prod_displays = await produce.find();
	// console.log(prod_displays)
	res.render("gp_page", {prod_displays, gp_user});
});

router.get("/buy", connectEnsureLogin.ensureLoggedIn() , async (req, res) => {
	const gp_user = req.user
	const prod_displays = await produce.find();
	// console.log(prod_displays)
	res.render("buy", {prod_displays, gp_user});
});



//getting items from db and posting them on cart
// router.get('/cart/:id', async function (req,res){
// 	const cart_display = await produce.findById({_id:req.params.id});
// 	res.render('add_cart', {cart_display});
	
// });


// router.post('/cart/:id', async function (req,res){
// 	const prod = await cart.findOne({_id:req.params.id});
// 	prod.save();
// 	console.log(req.body);
// })

// router.post("/cart/if", async (req, res) => {
// 	const cart = new cart(req.body);
// 	await cart.save();
// });

router.get('/gp_reg', async function(req,res){
	res.render('gen_pub_reg')
})


router.post('/gp_reg', async function (req,res){
	const gp_user = new add_ao(req.body);

	await add_ao.register(gp_user, req.body.password, (error, user) => {
		if(error) return error;
		res.redirect('/login')
	})

console.log(req.body);
})



router.post('/my_order', async function(req,res){

	req.session.user = req.user
	// console.log(req.session.user)

	const prod = await produce.findById({_id:req.body.product_id});
	const my_order = new order();
	const user = await add_ao.findById({_id:req.session.user._id})
	console.log(user, '****this is the user')
	my_order.ordered_by = req.session.user._id
	my_order.final_orderby = user.fo_id
	my_order.order_quantity = prod.qty;
	my_order.unit_price = prod.unit_price
	my_order.product_name = prod.prod_name
	my_order.owner_name = prod.owner_name
	my_order.owner_contact = prod.owner_contact
	my_order.owner_email = user.gp_email
	my_order.owner_contact = user.cust_phn_nmbr;
	// my_order.order_status = 'pending'

	console.log(my_order);
	// res.send('test')
	my_order.save();
})









module.exports = router;
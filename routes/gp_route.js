const express = require("express");
const router = express.Router();
const produce = require("../models/users")


router.get("/gp", async (req, res) => {
	const prod_displays = await produce.find();
	console.log(prod_displays)
	res.render("gp_page", {prod_displays});
});






module.exports = router;
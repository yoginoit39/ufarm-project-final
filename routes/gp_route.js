const express = require("express");
const router = express.Router();



router.get("/gp", (req, res) => {
	res.render("gp_page");
});


module.exports = router;
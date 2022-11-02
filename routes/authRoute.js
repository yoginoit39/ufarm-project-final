const express = require("express");
const router = express.Router();

router.get('/auth', async function (req,res){
    res.render('login');
});




module.exports = router;
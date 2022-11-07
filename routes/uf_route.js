const express = require("express");
const router = express.Router();
const add_produce = require("../models/users");
const multer = require("multer");
const { deleteOne } = require("../models/users");

var storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "public/uploads");
  },
  filename: (req, file, cb) => {
    cb(null, file.originalname);
  },
});

var upload = multer({ storage: storage });



// add product
router.get("/add_prod", async function (req, res) {
  const user_produce = await add_produce.find();
  // console.log(user_produce);
  res.render("uf_dash_add_prod", { user_produce });
});

router.post("/add_prod", upload.single("prod_image"), async function (req, res) {
  // console.log(req.body);
  const user_produce = new add_produce(req.body);
  user_produce.prod_image = req.file.path;
  await user_produce.save();

  user_produce.save((err) =>{
    if(err){
       console.log('error when adding produce');
    }else{       
        res.redirect('/add_prod'); 
    }
  })
});

// update
router.get("/add_prod/update/:id", async function(req,res){
	try {
		const user_produce = await add_produce.findOne({_id:req.params.id});
		// console.log('Product updated for uf', user_produce);
		res.render("prod_update_add", { user_produce });
    		
	} catch (error) {
		res.status(400).send('not able to load view');
	}
});

router.post("/add_prod/update/:id", async function(req,res){
	try {
		await add_produce.findOneAndUpdate(req.params.userid, req.body);
		res.redirect("/add_prod");
		
	} catch (error) {
		res.status(400).send('Unable to update');
	}
});


// delete product
router.post('/add_prod/delete', async function(req,res){
  try {
    await add_produce.deleteOne({_id:req.body.delete});
  } catch (error) {
    res.status(400).send('could not delete produce');
  }

  if(deleteOne){
    res.redirect('/add_prod')
  }

});









module.exports = router;

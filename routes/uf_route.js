const express = require("express");
const router = express.Router();
const add_produce = require("../models/users");
const multer = require("multer");

var storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "public/uploads");
  },
  filename: (req, file, cb) => {
    cb(null, file.originalname);
  },
});

var upload = multer({ storage: storage });

router.get("/add_prod", async function (req, res) {
  const user_produce = await add_produce.find();
  console.log(user_produce);
  res.render("uf_dash_add_prod", { user_produce });
});

router.post("/add_prod", upload.single("prod_image"), async function (req, res) {
  console.log(req.body);
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

module.exports = router;

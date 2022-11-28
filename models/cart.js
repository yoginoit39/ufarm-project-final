const mongoose = require('mongoose');
// const passportLocalMongoose = require('passport-local-mongoose');
const userSchema = new mongoose.Schema({
    prod_image:{
        type: String
    },
    prod_name:{
        Type:String
    },
    qty:{
        type: String
    },
    unit_price:{
        type: Number
    },
    prod_total:{
        type: Number
    },
  
})

module.exports = mongoose.model('cart', userSchema);
const mongoose = require('mongoose');
const userSchema = new mongoose.Schema({
    date:{       
        type: Date,
        default: Date.now
    },
    prod_name:{
        type: String
    },
    ward_name:{
        type: String
    },
    unit_price:{
        type: Number
    },
    qty:{
        type: String
    },
    directions:{
        type: String
    },
    produce_type:{
        type: String
    },
    mode_payment:{
        type: String
    },
    mode_of_delivery:{
        type: String
    },
    prod_image:{
        type: String
    },
    prod_available:{
        type: String
    },
    prod_status:{
        type: String,
        default: 'pending'
    },
    category:{
        type: String
    },
   
});

module.exports = mongoose.model("add_prod_data", userSchema);



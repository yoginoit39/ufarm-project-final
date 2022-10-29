const mongoose = require('mongoose');
const userSchema = new mongoose.Schema({
    date:{       
        type: Date,
        required: true,
        default: Date.now,
        required: true
    },
    prod_name:{
        type: String,
        required: true
    },
    ward_name:{
        type: String,
        required: true
    },
    unit_price:{
        type: Number,
        required: true
    },
    qty:{
        type: String,
        required: true
    },
    directions:{
        type: String,
        required: true,
    },
    produce_type:{
        type: String,
        required: true
    },
    mode_payment:{
        type: String,
        required: true
    },
    mode_of_delivery:{
        type: String,
        required: true,
    },
    prod_image:{
        type: String,
        required: true
    },
   
});

module.exports = mongoose.model("add_prod_data", userSchema);



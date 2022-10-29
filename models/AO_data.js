const mongoose = require('mongoose');
const userSchema = new mongoose.Schema({
    fo_id:{
        type: String,
        // required: true
    },
    reg_date:{
        type: Date
        // required: true,
    },
    name:{
        type: String,
        // required: true,
    },
    // gender:{
    //     type: String
    //     // required: true,
    // },
    dob:{
        type: Date,
        // required: true,
    },
    Acty_involved:{
        type: String,
        // required: true,
    },
    nin_number:{
        type: String,
        // required: true
    },
    phn_nmbr:{
        type: String
        // required: true,
    },
    home_directions:{
        type: String
        // required: true,
    },
    res_type:{
        type: String
        // required: true,
    },
    period_of_stay:{
        type: String
        // required: true,
    },
    male:{
        type: String
        // required: true
    },
    female:{
        type: String
        // required: true,
    },
});


module.exports = mongoose.model("ao_user", userSchema);

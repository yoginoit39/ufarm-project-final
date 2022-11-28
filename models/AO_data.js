const mongoose = require('mongoose');
const passportLocalMongoose = require('passport-local-mongoose');
const userSchema = new mongoose.Schema({
    fo_id:{
        type: String,
        unique: true,
    },
    role:{
        type: String
    },
    password:{
        type: String
    },
    reg_date:{
        type: Date,
    },
    full_name:{
        type: String,
    },
    dob:{
        type: String,
    },
    Gender:{
        type: String,
    },
    Ward_Represented:{
        type: String,
    },
    Acty_involved:{
        type: String,
    },
    nin_number:{
        type: String,
    },
    phn_nmbr:{
        type: String,
    },
    home_directions:{
        type: String,
    },
    res_type:{
        type: String,
    },
    period_of_stay:{
        type: String,
    },
    owner_id:{
        type: mongoose.Types.ObjectId,
        ref: 'ao_user'
    },
    owner_name:{
        type: String
    },
    owner_contact:{
        type: Number
    },
    gp_email:{
        type: String
    },
    cust_phn_nmbr:{
        type: String
    }
});

userSchema.plugin(passportLocalMongoose, {usernameField:'fo_id'});

module.exports = mongoose.model("ao_user", userSchema);

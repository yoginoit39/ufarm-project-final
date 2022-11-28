const mongoose = require('mongoose');
const passportLocalMongoose = require('passport-local-mongoose');
const userSchema = new mongoose.Schema({
    uf_id:{
        type: String,
        unique: true,
    },
    uf_password:{
        type: String
    },
    uf_role:{
        type: String
    },
    uf_reg_date:{
        type: String,
    },
    uf_full_name:{
        type: String,
    },
    uf_gender:{
        type: String,
    },
    uf_dob:{
        type: String,
    },
    uf_activity:{
        type: String
    },
    uf_contact:{
        type: String
    },
    uf_ninNumber:{
        type: String
    },
    uf_ward_name:{
        type: String
    },

});

userSchema.plugin(passportLocalMongoose, {usernameField:'uf_id'});

module.exports = mongoose.model('fo_data', userSchema);
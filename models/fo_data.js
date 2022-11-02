const mongoose = require('mongoose');
const userSchema = new mongoose.Schema({
    uf_id:{
        type: String,
        // required: true
    },
    reg_date:{
        type: String,
    },
    full_name:{
        type: String,
    },
    gender:{
        type: String,
    },
    dob:{
        type: String,
    },
    activity:{
        type: String
    },
    contact:{
        type: String
    },
    ninNumber:{
        type: String
    },
    ward_name:{
        type: String
    },


});

module.exports = mongoose.model('fo_data', userSchema);
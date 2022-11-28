const mongoose = require('mongoose');
const orderSchema = new mongoose.Schema({
    order_quantity: {
        type: Number
    },
    unit_price: {
        type: Number
    }, 
    total_price: {
        type: Number
    },
    product_name:{
        type: String
    },
    owner_email:{
        type: String
    },
    owner_contact:{
        type: String
    },
    order_status:{
        type: String,
        // default: 'Pending'
    },
    owner_name:{
        type: String
    },
    ordered_by:{
        type: mongoose.Types.ObjectId,
        ref: 'ao_user'
    },
    final_orderby:{
        type: String
    }

})

module.exports = mongoose.model('order', orderSchema)
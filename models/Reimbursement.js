const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ReimbursementSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    amount:{
        type:Number,
        required:true
    },
    eventName:{
        type:String,
        required:true
    },
    upload:{
        type:String,
        required:true
    }
})

module.exports = Reimbursement = mongoose.model('reimbursements', ReimbursementSchema)
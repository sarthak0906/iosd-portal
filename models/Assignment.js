const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const AssingmentSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    prerequisite:{
        type:String,
        required:true
    },
    discription:{
        type:String,
        required:true
    }
})

module.exports = Assingment = mongoose.model('assingments', AssingmentSchema)
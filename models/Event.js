const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const EventSchema = new Schema({
    eventTitle: {
        type: String,
        required: true
    },
    organisingChapter: {
        type: String,
        required: true
    },
    date1: {
        type: Date,
        required: true
    },
    date2: {
        type: Date,
        required: true
    },
    link:{
        type:String,
        required:true
    },
    type:{
        type:String,
        required:true
    },
    discription:{
        type:String,
        required:true
    },
    preview:{
        type:String,
        required:true
    },
    instructor:{
        type:String,
        required:true
    }
})

module.exports = Event = mongoose.model('events', EventSchema)
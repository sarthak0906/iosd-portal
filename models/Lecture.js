const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const LectureSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        required: true
    },
    prerequisite:{
        type:String,
        required:true
    },
    discription:{
        type:String,
        required:true
    },
    thumbnail:{
        type:String,
        required:true
    },
    instructor:{
        type:String,
        required:true
    }
})

module.exports = Lecture = mongoose.model('lectures', LectureSchema)
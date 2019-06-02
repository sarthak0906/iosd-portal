const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CourseSchema = new Schema({
    lesson_name: {
        type: String,
        required: true
    },
    lesson_flow: {
        type: Array,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    }
})

module.exports = Course = mongoose.model('coruses', CourseSchema)
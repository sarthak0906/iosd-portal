const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const EnrollmentSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    mobile: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    clg: {
        type: String,
        required: true
    },
    year: {
        type: String,
        required:true
    },
    upload:{
        type:String,
        required:true
    }
})

module.exports = Enrollment = mongoose.model('enrollments', EnrollmentSchema)
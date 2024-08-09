const mongoose = require('mongoose')


const studentSchema = new mongoose.Schema
({

    name: 
    {
        type: String,
        required: true
    },
    tech: 
    {
        type: String,
        required: true
    },
    sub: 
   {
        type: Boolean,
        required: true,
        default: false
    },
    rollno: 
    {
        type: Number,
        required: true
    },
    branch: 
    {
        type: String,
        required: true
    },

})

module.exports = mongoose.model('student',studentSchema)












const mongoose = require('mongoose');

var schema = new mongoose.Schema({
    fname: {
        type: String,
        required: true
    },
    lname: {
        type: String,
        required: true
    },
    email: {
        type: String,
         required: true
    },
    rno: {
        type: Number,
        required: true
    },
    phno: {
        type: Number,
        required: true
    },
    pno: {
        type: Number,
         required: true
    }
})

const Userdb = mongoose.model('userdb',schema);

module.exports = Userdb;
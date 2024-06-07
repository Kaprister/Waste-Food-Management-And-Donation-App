const mongoose = require('mongoose');

const donateSchema = new mongoose.Schema(
    {
        username : {
            type : String,
            required : true,
            lowercase : true,
        },
        email : {
            type : String,
            required : true,
            lowercase : true,
        },
        phoneNumber : {
            type : Number,
            required : true,
        },
        food : {
            type : String,
            required : true,
        },
        quantity : {
            type : Number,
            required : true,
        },
        date : {
            type : String,
        },
        note : {
            type : String,
        },
    },
    {timestamps : true}
);


module.exports = mongoose.model('Donate', donateSchema);

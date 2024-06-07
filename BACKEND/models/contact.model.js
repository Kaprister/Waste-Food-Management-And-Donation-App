const mongoose = require('mongoose');


const contactSchema = new mongoose.Schema(
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
        subject : {
            type : String,
        },
        note : {
            type : String,
        },
    },
    {timestamps : true}
);


// export const Contact = mongoose.model('Contact', contactSchema);
module.exports = mongoose.model('Contact', contactSchema);
const mailSender = require('../utils/mailSender');
const Donate = require('../models/donate.model')

// donate
exports.donate = async(req, res) => {
    try{
        // get data from the request body
        let data = {
            username,
            email,
            phoneNumber,
            food,
            quantity,
            date,
            note
        } = req.body;
        

        // check if all details are there are not
        if(!username || !email || !phoneNumber || !food || !quantity || !note){
            return res.status(403).send({
                success: false,
                message: "All Fields are required"
            });
        }


        const user = await Donate.create({
            username : data.username,
            email : data.email,
            phoneNumber : data.phoneNumber,
            food : data.food,
            quantity : data.quantity,
            date : data.date,
            note : data.note,
        });

        const emailResponse = await mailSender(
            user.email,
            "Thank You for Your open-handed Donation",

            `
            Dear ,

            We are writing to acknowledge and express our heartfelt gratitude for your recent donation of food items. Your abundance and willingness to support our cause is greatly appreciated.
        
            We have successfully received your donated food and your contact details. Should there be any further needs or if we require any additional information, we will not hesitate to contact you.
        
            Your contribution is invaluable in helping us provide for those in need, and we deeply appreciate your support. Together, we can make a significant difference in our community.
        
            Once again, thank you for your kindness and support.

            Best regards,

            Team Food Yard HIT(Haldia)

            `
        )


        return res.status(200).json({
            success: true,
            user,
            message: "Thank you for donating us!",
            msg: emailResponse ? "Mail Sent Successfully!" : "Mail cannot be Sent!",
        });

    }catch(error){
        console.error(error);
        return res.status(500).json({
            success: false,
            message: "User cannot be registered. Please try again!"
        })
    }
}

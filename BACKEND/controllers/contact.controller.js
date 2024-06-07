const mailSender = require('../utils/mailSender');
const Contact = require('../models/contact.model')

// contact us
exports.contact = async(req, res) => {
    try {
        let data = {
            username,
            email,
            subject,
            note
        } = req.body;

        if(!username || !email || !subject){
            return res.status(403).send({
                success: false,
                message: "All Fields are required"
            });
        }

        // const user = await Contact.create({
        //     username : data.name.toString(),
        //     email : data.email.toString(),
        //     subject : data.subject.toString(),
        //     note : data.note.toString(),
        // });

        const user = await Contact.create({
            username : data.username,
            email : data.email,
            subject : data.subject,
            note : data.note,
        });

        const emailResponse = await mailSender(
            user.email,
            "Thank You for Contacting Us",

            `
            Thank you for reaching out to us. We appreciate you taking the time to contact us and we want to assure you that your inquiry is important to us.

            Our team has received your message and will be reviewing it promptly. If your inquiry requires a response, one of our representatives will get back to you as soon as possible. Should you need immediate assistance, please feel free to call our support line at [phone number] or visit our website at [website link].

            We value your interest and look forward to assisting you. Thank you once again for contacting us.

            Best regards,

            Team Food Yard HIT(Haldia)
            `
        )


        return res.status(200).json({
            success: true,
            user,
            message: "We will contact you soon!",
            msg: emailResponse ? "Mail Sent Successfully!" : "Mail cannot be Sent!",
        });


    } catch (error) {
        console.error(error);
        return res.status(500).json({
            success: false,
            message: "something went wrong!. Please try again!"
        })
    }
}

const nodemailer = require("nodemailer");
require("dotenv").config();

const transporter = nodemailer.createTransport({
    service: "gmail",
    auth:{
        user: process.env.EMAIL,
        pass: process.env.PASSWORD
    }
});

const mailOptions = {
    from: process.env.EMAIL,
    to: process.env.EMAIL
};

module.exports = {transporter, mailOptions}
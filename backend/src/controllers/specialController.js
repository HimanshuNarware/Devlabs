require("dotenv").config();

const {transporter, mailOptions} = require("../config/nodemailer");

const capitalize = (word) => {
    return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
}

const generateEmailText = (data) => {
    const text = Object.entries(data).reduce((str, [key, value]) => {
        return str += `${capitalize(key)}: \n${value}\n\n`;
    }, "");
    return text;
}

const generateEmailBody = ({name, email, review}) => {
    const html = `
        <html>
            <body>
                <h2>Message from ${name}</h2>
                <p><strong>Email:</strong> ${email}</p>
                <span><strong>Message:</strong></span>
                <p>${review}</p>
            </body>
        </html>
    `;
    return html;
}

const sendMail = async (req, res) => {
    try{
        const { name, email, review } = req.body;
        if (!name || !email || !review)
            return res.status(400).json({ success:false, errors: ["Missing Data"] });

        await transporter.sendMail({
            ...mailOptions(email),
            subject: `${name} CONTACTING THROUGH PORTFOLIO`,
            text: generateEmailText({ name, email, review }),
            html: generateEmailBody({ name, email, review })
        });

        return res.status(200).json({ success: true });
    }
    catch (error) {
        console.log(error);
        return res.status(500).json({ success: false, errors: ["Internal Server Error"] });
    }
};

module.exports = { sendMail };
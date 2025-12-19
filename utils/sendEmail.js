const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    secure: false,
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS, // Gmail App Password
    },
});

// Optional verification (logs only, never blocks app)
transporter.verify()
    .then(() => console.log("✅ Email transporter ready"))
    .catch(err => console.error("❌ Email transporter error:", err.message));

async function sendResetEmail(to, resetURL) {
    const mailOptions = {
        from: `"Mini Airbnb" <${process.env.EMAIL_USER}>`,
        to,
        subject: "Mini Airbnb - Password Reset",
        html: `
            <h2>Password Reset</h2>
            <p>Click the link below to reset your password:</p>
            <a href="${resetURL}">${resetURL}</a>
            <p>This link expires in 1 hour.</p>
        `,
    };

    // Let error bubble to caller (.catch in controller)
    return transporter.sendMail(mailOptions);
}

module.exports = { sendResetEmail };

const nodemailer = require("nodemailer");

// Create transporter once (best practice)
const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    secure: false, // TLS
    auth: {
        user: process.env.EMAIL,
        pass: process.env.EMAIL_PASSWORD
    },
    connectionTimeout: 5000,
    greetingTimeout: 5000,
    socketTimeout: 5000
});

// Verify transporter at startup (optional but helpful)
transporter.verify(err => {
    if (err) {
        console.error("SMTP CONFIG ERROR:", err.message);
    } else {
        console.log("SMTP ready to send emails");
    }
});

// =======================
// SEND RESET EMAIL (SAFE)
// =======================

module.exports.sendResetEmail = async (to, resetURL) => {
    try {
        await transporter.sendMail({
            from: `"Mini Airbnb" <${process.env.EMAIL}>`,
            to,
            subject: "Reset your Mini Airbnb password",
            html: `
                <p>You requested a password reset.</p>
                <p>
                    <a href="${resetURL}">
                        Click here to reset your password
                    </a>
                </p>
                <p>This link will expire in 1 hour.</p>
                <p>If you did not request this, please ignore this email.</p>
            `
        });
    } catch (err) {
        // 🚨 Never throw, never block
        console.error("EMAIL SEND FAILED:", err.message);
    }
};

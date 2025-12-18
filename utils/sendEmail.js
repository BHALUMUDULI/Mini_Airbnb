const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    secure: false,
    auth: {
        user: process.env.EMAIL,
        pass: process.env.EMAIL_PASSWORD
    },
    connectionTimeout: 5000,
    greetingTimeout: 5000,
    socketTimeout: 5000
});

module.exports.sendResetEmail = async (to, resetURL) => {
    try {
        await transporter.sendMail({
            to,
            from: process.env.EMAIL,
            subject: "Mini Airbnb - Password Reset",
            html: `
                <p>You requested a password reset</p>
                <a href="${resetURL}">Click here to reset your password</a>
                <p>This link expires in 1 hour</p>
            `
        });
    } catch (err) {
        // 🚨 IMPORTANT: never crash or hang
        console.error("EMAIL ERROR:", err.message);
        console.log("RESET LINK (fallback):", resetURL);
    }
};

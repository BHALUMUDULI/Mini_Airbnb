const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
        user: process.env.EMAIL_USER, // your gmail
        pass: process.env.EMAIL_PASS  // 16-digit app password
    }
});

module.exports.sendResetEmail = async (to, resetURL) => {
    try {
        await transporter.sendMail({
            from: `"Mini Airbnb" <${process.env.EMAIL_USER}>`,
            to,
            subject: "Mini Airbnb - Password Reset",
            html: `
                <h2>Password Reset Request</h2>
                <p>You requested to reset your password.</p>
                <p>Click the link below to reset it:</p>
                <a href="${resetURL}">${resetURL}</a>
                <p>This link will expire in 1 hour.</p>
            `
        });

        console.log("✅ Reset email sent successfully");
    } catch (err) {
        console.error("❌ Email sending failed:", err.message);
        throw err;
    }
};

const nodemailer = require("nodemailer");

// Create transporter
const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    secure: false, // true for port 465
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS, // 16-digit Gmail App Password
    },
});

// Verify transporter connection (optional, logs connection issues)
transporter.verify((error, success) => {
    if (error) {
        console.error("❌ Email transporter verification failed:", error.message);
    } else {
        console.log("✅ Email transporter is ready to send messages");
    }
});

/**
 * Send password reset email
 * @param {string} to - recipient email
 * @param {string} resetURL - link to reset password
 */
async function sendResetEmail(to, resetURL) {
    try {
        const mailOptions = {
            from: `"Mini Airbnb" <${process.env.EMAIL_USER}>`,
            to,
            subject: "Mini Airbnb - Password Reset",
            html: `
                <h2>Password Reset Request</h2>
                <p>You requested to reset your password.</p>
                <p>Click the link below to reset it:</p>
                <a href="${resetURL}">${resetURL}</a>
                <p>This link will expire in 1 hour.</p>
            `,
        };

        await transporter.sendMail(mailOptions);
        console.log(`✅ Reset email sent successfully to ${to}`);
        return { success: true, message: "Email sent successfully" };
    } catch (err) {
        console.error(`❌ Failed to send reset email to ${to}:`, err.message);
        // Return error object instead of throwing, so front-end can respond
        return { success: false, message: "Email could not be sent" };
    }
}

module.exports = { sendResetEmail };

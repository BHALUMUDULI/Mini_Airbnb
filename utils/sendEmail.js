const sgMail = require("@sendgrid/mail");

// Configure SendGrid
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

/**
 * Send password reset email (non-blocking)
 * @param {string} to - recipient email
 * @param {string} resetURL - reset link
 */
module.exports.sendResetEmail = async (to, resetURL) => {
    const msg = {
        to,
        from: process.env.EMAIL_FROM, // Verified email in SendGrid
        subject: "Mini Airbnb - Reset your password",
        html: `
            <p>You requested a password reset.</p>
            <p>
                <a href="${resetURL}">Click here to reset your password</a>
            </p>
            <p>This link will expire in 1 hour.</p>
            <p>If you did not request this, please ignore this email.</p>
        `
    };

    try {
        await sgMail.send(msg);
        console.log(`Reset email sent to ${to}`);
    } catch (err) {
        console.error("SendGrid EMAIL ERROR:", err.message);
        console.log("RESET LINK (fallback):", resetURL);
    }
};

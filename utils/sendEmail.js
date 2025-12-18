const sgMail = require("@sendgrid/mail");

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

module.exports.sendResetEmail = async (to, resetURL) => {
    try {
        await sgMail.send({
            to,
            from: process.env.EMAIL_FROM, // MUST be verified sender
            subject: "Mini Airbnb - Password Reset",
            html: `
                <p>You requested a password reset</p>
                <a href="${resetURL}">Click here to reset your password</a>
                <p>This link expires in 1 hour</p>
            `
        });

        console.log("✅ Reset email sent to:", to);
    } catch (err) {
        console.error(
            "❌ SendGrid EMAIL ERROR:",
            err.response?.body?.errors || err.message
        );
        console.log("🔗 RESET LINK (fallback):", resetURL);
    }
};

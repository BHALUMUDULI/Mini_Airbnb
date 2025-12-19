const nodemailer = require("nodemailer");

// 🔎 Debug (safe)
console.log("📧 SENDGRID_API_KEY:", process.env.SENDGRID_API_KEY ? "SET" : "MISSING");
console.log("📧 EMAIL_FROM:", process.env.EMAIL_FROM ? "SET" : "MISSING");

// ✅ SendGrid SMTP transporter
const transporter = nodemailer.createTransport({
    host: "smtp.sendgrid.net",
    port: 587,
    secure: false,
    auth: {
        user: "apikey", // ← MUST be literally "apikey"
        pass: process.env.SENDGRID_API_KEY,
    },
});

// ✅ Verify (non-blocking)
transporter.verify()
    .then(() => console.log("✅ SendGrid transporter ready"))
    .catch(err =>
        console.error("❌ SendGrid transporter error:", err.message)
    );

async function sendResetEmail(to, resetURL) {
    console.log("📨 Sending reset email to:", to);

    const mailOptions = {
        from: `"Mini Airbnb" <${process.env.EMAIL_FROM}>`,
        to,
        subject: "Mini Airbnb - Password Reset",
        html: `
            <h2>Password Reset</h2>
            <p>Click the link below to reset your password:</p>
            <a href="${resetURL}">${resetURL}</a>
            <p>This link expires in 1 hour.</p>
        `,
    };

    return transporter.sendMail(mailOptions);
}

module.exports = { sendResetEmail };

const nodemailer = require("nodemailer");

// 🔎 Debug env variables (safe logs)
console.log("📧 EMAIL_USER:", process.env.EMAIL_USER ? "SET" : "MISSING");
console.log("📧 EMAIL_PASS:", process.env.EMAIL_PASS ? "SET" : "MISSING");

// ✅ Use Gmail service (best for production)
const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS, // Gmail App Password
    },
});

// ✅ Verify transporter (non-blocking)
transporter.verify()
    .then(() => console.log("✅ Email transporter ready"))
    .catch(err =>
        console.error("❌ Email transporter error:", err.message)
    );

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

    // 🔥 Important log
    console.log("📨 Sending reset email to:", to);

    return transporter.sendMail(mailOptions);
}

module.exports = { sendResetEmail };

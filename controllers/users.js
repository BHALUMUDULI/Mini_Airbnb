const User = require("../models/user");
const crypto = require("crypto");
const nodemailer = require("nodemailer");

// EMAIL CONFIG
const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
        user: process.env.EMAIL,
        pass: process.env.EMAIL_PASSWORD
    }
});

// =======================
// AUTH CONTROLLERS
// =======================

module.exports.renderSignupForm = (req, res) => {
    res.render("users/signup.ejs");
};

module.exports.signup = async (req, res, next) => {
    try {
        const { username, email, password } = req.body;
        const newUser = new User({ email, username });
        const registeredUser = await User.register(newUser, password);

        req.login(registeredUser, err => {
            if (err) return next(err);
            req.flash("success", "Welcome to Mini_Airbnb");
            res.redirect("/listings");
        });
    } catch (e) {
        req.flash("error", e.message);
        res.redirect("/signup");
    }
};

module.exports.renderLoginForm = (req, res) => {
    res.render("users/login.ejs");
};

module.exports.login = (req, res) => {
    req.flash("success", "Welcome back to Mini_Airbnb!");
    const redirectUrl = res.locals.redirectUrl || "/listings";
    res.redirect(redirectUrl);
};

module.exports.logout = (req, res, next) => {
    req.logout(err => {
        if (err) return next(err);
        req.flash("success", "Logged out successfully");
        res.redirect("/listings");
    });
};

// =======================
// FORGOT PASSWORD
// =======================

module.exports.renderForgotPassword = (req, res) => {
    res.render("users/forgot.ejs");
};

module.exports.forgotPassword = async (req, res) => {
    const user = await User.findOne({ email: req.body.email });

    if (!user) {
        req.flash("error", "No account with that email");
        return res.redirect("/forgot-password");
    }

    const token = crypto.randomBytes(20).toString("hex");

    user.resetPasswordToken = token;
    user.resetPasswordExpires = Date.now() + 3600000; // 1 hour
    await user.save();

    const resetURL = `${req.protocol}://${req.get("host")}/reset/${token}`;

    await transporter.sendMail({
        to: user.email,
        from: process.env.EMAIL,
        subject: "Mini Airbnb - Password Reset",
        html: `
          <p>You requested a password reset</p>
          <a href="${resetURL}">Click here to reset your password</a>
          <p>This link expires in 1 hour</p>
        `
    });

    req.flash("success", "Password reset email sent");
    res.redirect("/login");
};

// =======================
// RESET PASSWORD
// =======================

module.exports.renderResetPassword = async (req, res) => {
    const user = await User.findOne({
        resetPasswordToken: req.params.token,
        resetPasswordExpires: { $gt: Date.now() }
    });

    if (!user) {
        req.flash("error", "Token invalid or expired");
        return res.redirect("/forgot-password");
    }

    res.render("users/reset.ejs", { token: req.params.token });
};

module.exports.resetPassword = async (req, res) => {
    const user = await User.findOne({
        resetPasswordToken: req.params.token,
        resetPasswordExpires: { $gt: Date.now() }
    });

    if (!user) {
        req.flash("error", "Token invalid or expired");
        return res.redirect("/forgot-password");
    }

    await user.setPassword(req.body.password);
    user.resetPasswordToken = undefined;
    user.resetPasswordExpires = undefined;
    await user.save();

    req.flash("success", "Password updated successfully");
    res.redirect("/login");
};

const User = require("../models/user");
const crypto = require("crypto");
const { sendResetEmail } = require("../utils/sendEmail");

// =======================
// AUTH CONTROLLERS
// =======================

module.exports.renderSignupForm = (req, res) => {
    res.render("users/signup.ejs");
};

module.exports.signup = async (req, res, next) => {
    const { username, email, password } = req.body;

    const newUser = new User({ email, username });
    const registeredUser = await User.register(newUser, password);

    req.login(registeredUser, err => {
        if (err) return next(err);
        req.flash("success", "Welcome to Mini_Airbnb");
        res.redirect("/listings");
    });
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

    // 🔐 Do not reveal user existence
    if (!user) {
        req.flash(
            "success",
            "If an account exists with that email, a reset link has been sent"
        );
        return res.redirect("/forgot-password");
    }

    const token = crypto.randomBytes(32).toString("hex");

    user.resetPasswordToken = crypto
        .createHash("sha256")
        .update(token)
        .digest("hex");

    user.resetPasswordExpires = Date.now() + 60 * 60 * 1000; // 1 hour
    await user.save();

    const resetURL = `${req.protocol}://${req.get("host")}/reset/${token}`;

    // 🚀 Send email WITHOUT blocking response
    sendResetEmail(user.email, resetURL)
        .then(() => console.log("📧 Reset email sent successfully"))
        .catch(err =>
            console.error("❌ Reset email failed:", err.message)
        );

    req.flash(
        "success",
        "If an account exists with that email, a reset link has been sent"
    );
    res.redirect("/forgot-password");
};

// =======================
// RESET PASSWORD
// =======================

module.exports.renderResetPassword = async (req, res) => {
    const hashedToken = crypto
        .createHash("sha256")
        .update(req.params.token)
        .digest("hex");

    const user = await User.findOne({
        resetPasswordToken: hashedToken,
        resetPasswordExpires: { $gt: Date.now() }
    });

    if (!user) {
        req.flash("error", "Token invalid or expired");
        return res.redirect("/forgot-password");
    }

    res.render("users/reset.ejs", { token: req.params.token });
};

module.exports.resetPassword = async (req, res) => {
    const hashedToken = crypto
        .createHash("sha256")
        .update(req.params.token)
        .digest("hex");

    const user = await User.findOne({
        resetPasswordToken: hashedToken,
        resetPasswordExpires: { $gt: Date.now() }
    });

    if (!user) {
        req.flash("error", "Token invalid or expired");
        return res.redirect("/forgot-password");
    }

    if (req.body.password !== req.body.confirmPassword) {
        req.flash("error", "Passwords do not match");
        return res.redirect("back");
    }

    await user.setPassword(req.body.password);

    user.resetPasswordToken = undefined;
    user.resetPasswordExpires = undefined;
    await user.save();

    req.flash("success", "Password updated successfully");
    res.redirect("/login");
};

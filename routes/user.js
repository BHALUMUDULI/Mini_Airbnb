const express = require("express");
const router = express.Router();
const wrapAsync = require("../utils/wrapAsync");
const passport = require("passport");
const { saveRedirectUrl } = require("../middleware.js");
const userController = require("../controllers/users.js");

// SIGNUP
router.route("/signup")
    .get(userController.renderSignupForm)
    .post(wrapAsync(userController.signup));

// LOGIN
router.route("/login")
    .get(userController.renderLoginForm)
    .post(
        saveRedirectUrl,
        passport.authenticate("local", {
            failureRedirect: "/login",
            failureFlash: true
        }),
        userController.login
    );

// LOGOUT
router.get("/logout", userController.logout);

// FORGOT PASSWORD
router.get("/forgot-password", userController.renderForgotPassword);
router.post("/forgot-password", wrapAsync(userController.forgotPassword));

// RESET PASSWORD
router.get("/reset/:token", wrapAsync(userController.renderResetPassword));
router.post("/reset/:token", wrapAsync(userController.resetPassword));

module.exports = router;

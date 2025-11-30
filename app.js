require('dotenv').config();

const express = require("express");
const app = express();
const mongoose = require("mongoose");
const path = require("path");
const methodOverride = require("method-override");
const ejsMate = require("ejs-mate");
const ExpressError = require("./utils/ExpressError.js");
const session = require("express-session");
const MongoStore = require("connect-mongo");
const flash = require("connect-flash");
const passport = require("passport");
const LocalStrategy = require("passport-local");
const User = require("./models/user.js");

// Routers
const listingsRouter = require("./routes/listing.js");
const reviewsRouter = require("./routes/review.js");
const userRouter = require("./routes/user.js");


// =============================
// 🔗 MONGODB CONNECTION
// =============================
const dbUrl = process.env.ATLASDB_URL;

mongoose.connect(dbUrl)
  .then(() => console.log("Connected to DB"))
  .catch(err => console.log("DB Connection Error:", err));


// =============================
// ⚙️ EXPRESS SETUP
// =============================
app.engine("ejs", ejsMate);
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use(express.urlencoded({ extended: true }));
app.use(methodOverride("_method"));
app.use(express.static(path.join(__dirname, "/public")));


// =============================
// 🔐 SESSION SETUP
// =============================
const store = MongoStore.create({
  mongoUrl: dbUrl,
  touchAfter: 24 * 3600
});

store.on("error", err => {
  console.log("Mongo Store Error:", err);
});

const sessionOptions = {
  store,
  secret: process.env.SECRET || "thisshouldbeabettersecret",
  resave: false,
  saveUninitialized: true,
  cookie: {
    httpOnly: true,
    expires: Date.now() + 7 * 24 * 60 * 60 * 1000,
    maxAge: 7 * 24 * 60 * 60 * 1000
  }
};

app.use(session(sessionOptions));
app.use(flash());


// =============================
// 🔑 PASSPORT AUTH
// =============================
app.use(passport.initialize());
app.use(passport.session());

passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());


// =============================
// 🌟 GLOBAL MIDDLEWARE
// =============================
app.use((req, res, next) => {
  res.locals.success = req.flash("success");
  res.locals.error = req.flash("error");
  res.locals.currUser = req.user;
  next();
});


// =============================
// 📄 STATIC PAGES ROUTES
// (Files MUST exist inside /views)
// about.ejs, contact.ejs, privacy.ejs, terms.ejs
// =============================
app.get("/about", (req, res) => {
  res.render("includes/about");
});

app.get("/contact", (req, res) => {
  res.render("includes/contact");
});

app.get("/privacy", (req, res) => {
  res.render("includes/privacy");
});

app.get("/terms", (req, res) => {
  res.render("includes/terms");
});


// =============================
// 🛣️ MAIN ROUTERS
// =============================
app.use("/listings", listingsRouter);
app.use("/listings/:id/reviews", reviewsRouter);
app.use("/", userRouter);


// =============================
// ❌ 404 HANDLER
// =============================
app.use((req, res, next) => {
  next(new ExpressError(404, "Page not found!"));
});


// =============================
// ⚠️ GLOBAL ERROR HANDLER
// =============================
app.use((err, req, res, next) => {
  if (res.headersSent) return next(err);

  const { statusCode = 500, message = "Something went wrong!" } = err;
  res.status(statusCode).render("error", { message });
});


// =============================
// 🚀 SERVER
// =============================
const port = process.env.PORT || 8080;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

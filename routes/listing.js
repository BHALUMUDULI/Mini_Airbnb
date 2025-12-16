const express = require("express");
const router = express.Router({ mergeParams: true });

const Booking = require("../models/booking");
const Listing = require("../models/listing");
const { isLoggedIn } = require("../middleware");
const wrapAsync = require("../utils/wrapAsync");

// CREATE BOOKING
router.post("/", isLoggedIn, wrapAsync(async (req, res) => {
    const { id } = req.params;
    const { checkIn, checkOut } = req.body;

    const listing = await Listing.findById(id);
    if (!listing) {
        req.flash("error", "Listing not found");
        return res.redirect("/listings");
    }

    // 🔒 Prevent overlapping bookings
    const existingBookings = await Booking.find({
        listing: id,
        status: { $ne: "cancelled" },
        $or: [
            { checkIn: { $lt: new Date(checkOut), $gte: new Date(checkIn) } },
            { checkOut: { $gt: new Date(checkIn), $lte: new Date(checkOut) } }
        ]
    });

    if (existingBookings.length > 0) {
        req.flash("error", "Selected dates are already booked");
        return res.redirect(`/listings/${id}`);
    }

    const days =
        (new Date(checkOut) - new Date(checkIn)) / (1000 * 60 * 60 * 24);

    const totalPrice = days * listing.price;

    const booking = new Booking({
        listing: id,
        user: req.user._id,
        checkIn,
        checkOut,
        totalPrice
    });

    await booking.save();

    req.flash("success", "Booking created successfully!");
    res.redirect(`/bookings/${booking._id}`);
}));

module.exports = router;

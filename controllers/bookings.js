const Booking = require("../models/booking");
const Listing = require("../models/listing");

// CREATE BOOKING (UPI fallback - SAFE)
module.exports.createBooking = async (req, res) => {
    const { id } = req.params;
    const { checkIn, checkOut } = req.body;

    const listing = await Listing.findById(id);
    if (!listing) {
        req.flash("error", "Listing not found");
        return res.redirect("/listings");
    }

    const start = new Date(checkIn);
    const end = new Date(checkOut);

    if (start >= end) {
        req.flash("error", "Check-out must be after check-in");
        return res.redirect(`/listings/${id}`);
    }

    // ❌ Prevent overlapping booking
    const conflict = await Booking.findOne({
        listing: id,
        status: { $ne: "cancelled" },
        checkIn: { $lt: end },
        checkOut: { $gt: start }
    });

    if (conflict) {
        req.flash("error", "Selected dates are already booked");
        return res.redirect(`/listings/${id}`);
    }

    const days = (end - start) / (1000 * 60 * 60 * 24);
    const totalPrice = days * listing.price;

    const booking = new Booking({
        listing: id,
        user: req.user._id,
        checkIn: start,
        checkOut: end,
        totalPrice,
        status: "pending"
    });

    await booking.save();

    // 🔹 Store UPI info in flash (NOT redirect)
    const upiId = "yourupi@upi"; // replace with your real UPI
    const note = `Booking-${booking._id}`;
    const upiLink = `upi://pay?pa=${upiId}&pn=MiniAirbnb&am=${totalPrice}&cu=INR&tn=${note}`;

    req.flash(
        "success",
        `Booking created! Complete payment via UPI.`
    );

    // send UPI link safely to UI
    req.flash("upiLink", upiLink);

    return res.redirect(`/listings/${id}`);
};

const Booking = require("../models/booking");
const Listing = require("../models/listing");

// CREATE BOOKING
module.exports.createBooking = async (req, res) => {
    const { id } = req.params; // listing id
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

    // ❌ prevent double booking
    const existingBooking = await Booking.findOne({
        listing: id,
        status: { $ne: "cancelled" },
        $or: [
            { checkIn: { $lt: end, $gte: start } },
            { checkOut: { $gt: start, $lte: end } }
        ]
    });

    if (existingBooking) {
        req.flash("error", "Selected dates are already booked");
        return res.redirect(`/listings/${id}`);
    }

    const days =
        (end - start) / (1000 * 60 * 60 * 24);

    const totalPrice = days * listing.price;

    const booking = new Booking({
        listing: id,
        user: req.user._id,
        checkIn: start,
        checkOut: end,
        totalPrice
    });

    await booking.save();

    req.flash("success", "Booking created successfully!");
    res.redirect(`/listings/${id}`);
};

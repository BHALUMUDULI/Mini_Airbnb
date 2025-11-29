const Listing = require("../models/listing");
const mbxGeocoding = require('@mapbox/mapbox-sdk/services/geocoding');
const mapToken = process.env.MAP_TOKEN;
const geocodingClient = mbxGeocoding({ accessToken: mapToken });


// INDEX
module.exports.index = async (req, res) => {
    const { category, search } = req.query;
    let filter = {};

    if (category) filter.category = category;

    if (search && search.trim() !== "") {
        filter.$or = [
            { country: { $regex: new RegExp(search, "i") } },
            { location: { $regex: new RegExp(search, "i") } }
        ];
    }

    const allListings = await Listing.find(filter);

    if (allListings.length === 0 && category) {
        req.flash("error", `No listings found in the '${category}' category.`);
    }

    return res.render("listings/index.ejs", { allListings, search });
};


// NEW FORM
module.exports.renderNewForm = (req, res) => {
    return res.render("listings/new.ejs", { mapToken });
};


// SHOW LISTING
module.exports.showListing = async (req, res) => {
    const { id } = req.params;

    const listing = await Listing.findById(id)
        .populate({ path: "reviews", populate: { path: "author" } })
        .populate("owner");

    if (!listing) {
        req.flash("error", "Listing does not exist");
        return res.redirect("/listings");
    }

    return res.render("listings/show.ejs", { listing, mapToken });
};


// CREATE LISTING
module.exports.createListing = async (req, res) => {
    const { listing } = req.body;

    // FIXED: ensure geometry always valid
    let geometry = null;

    if (listing.geometry?.coordinates) {
        geometry = {
            type: "Point",
            coordinates: [
                parseFloat(listing.geometry.coordinates[0]),
                parseFloat(listing.geometry.coordinates[1])
            ]
        };
    } else {
        const response = await geocodingClient.forwardGeocode({
            query: listing.location,
            limit: 1,
        }).send();

        if (!response.body.features.length) {
            req.flash("error", "Invalid location.");
            return res.redirect("/listings/new");
        }

        geometry = response.body.features[0].geometry;
    }

    const newListing = new Listing(listing);
    newListing.owner = req.user._id;

    if (req.file) {
        newListing.image = {
            url: req.file.path,
            filename: req.file.filename
        };
    }

    newListing.geometry = geometry;

    await newListing.save();

    req.flash("success", "New Listing Created");
    return res.redirect("/listings");
};


// EDIT FORM
module.exports.renderEditForm = async (req, res) => {
    const { id } = req.params;
    const listing = await Listing.findById(id);

    if (!listing) {
        req.flash("error", "Listing does not exist");
        return res.redirect("/listings");
    }

    const originalImageUrl = listing.image?.url?.replace("/upload", "/upload/w_250") || "";

    return res.render("listings/edit.ejs", { listing, originalImageUrl, mapToken });
};


// UPDATE LISTING  (FIXED!)
module.exports.updateListing = async (req, res) => {
    const { id } = req.params;

    const listing = await Listing.findByIdAndUpdate(
        id,
        { ...req.body.listing },
        { new: true }
    );

    if (!listing) {
        req.flash("error", "Listing not found");
        return res.redirect("/listings");
    }

    if (req.file) {
        listing.image = {
            url: req.file.path,
            filename: req.file.filename
        };
        await listing.save();
    }

    req.flash("success", "Listing Updated");
    return res.redirect(`/listings/${id}`);
};


// DELETE
module.exports.destroyListing = async (req, res) => {
    const { id } = req.params;
    await Listing.findByIdAndDelete(id);

    req.flash("success", "Listing Deleted!");
    return res.redirect("/listings");
};

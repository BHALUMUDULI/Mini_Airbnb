const mongoose = require("mongoose");
const initData = require("./data.js");
const Listing = require("../models/listing.js");

const MONGO_URL = process.env.ATLASDB_URL;  // ✔ Use Atlas, not localhost

main()
  .then(() => {
    console.log("Connected to Atlas DB");
  })
  .catch((err) => {
    console.log(err);
  });

async function main() {
  await mongoose.connect(MONGO_URL);
}

const initDB = async () => {
  await Listing.deleteMany({});
  initData.data = initData.data.map((obj) => ({
    ...obj,
    owner: "6924a854adf56298bb1c5a28"
  }));
  await Listing.insertMany(initData.data);
  console.log("Database seeded successfully!");
};

initDB();

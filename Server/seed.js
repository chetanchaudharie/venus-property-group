const mongoose = require("mongoose");
const dotenv = require("dotenv");
const Property = require("./models/Property");

dotenv.config();

mongoose.connect(process.env.MONGO_URI).then(async () => {
  await Property.deleteMany(); // clears old data

  await Property.insertMany([
    {
      title: "2 BHK Flat in Ace Aspire",
      price: 25000,
      location: "Noida Extension",
      size: "1250 sqft",
      image: "https://via.placeholder.com/400x250",
      beds: 2,
      bathrooms: 2,
    },
    {
      title: "1 BHK in Greentech NX",
      price: 16000,
      location: "Noida Extension",
      size: "550 sqft",
      image: "https://via.placeholder.com/400x250",
      beds: 1,
      bathrooms: 1,
    },
    {
      title: "1 BHK in 14th Avenue",
      price: 15000+ "Maintenance",
      location: "Greater Noida West",
      size: "550 sqft",
      image: "https://via.placeholder.com/400x250",
      beds: 1,
      bathrooms: 1,
    }
  ]);

  console.log("✅ Sample properties added.");
  process.exit();
});

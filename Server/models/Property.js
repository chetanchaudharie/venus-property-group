// models/Property.js
import mongoose from "mongoose";

const propertySchema = new mongoose.Schema({
  title: String,
  location: String,
  price: Number,
  beds: Number,
  bathrooms: Number,
  image: String,
});

const Property = mongoose.model("Property", propertySchema);

export default Property;

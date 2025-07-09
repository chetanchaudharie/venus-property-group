import express from "express";
import Property from "../models/Property.js";

const router = express.Router();

// Read all properties
router.get("/", async (req, res) => {
  try {
    const properties = await Property.find();
    res.json(properties);
  } catch (err) {
    res.status(500).json({ error: "Server error" });
  }
});

// Create a new property
router.post("/", async (req, res) => {
  try {
    const { title, location, price, beds, bathrooms, image } = req.body;
    const property = new Property({ title, location, price, beds, bathrooms, image });
    await property.save();
    res.status(201).json(property);
  } catch (err) {
    res.status(500).json({ error: "Server error" });
  }
});


// Update an existing property
// PUT /api/properties/:id
router.put("/:id", async (req, res) => {
  try {
    const updatedProperty = await Property.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true } // return the updated document
    );
    res.json(updatedProperty);
  } catch (err) {
    res.status(500).json({ error: "Failed to update property" });
  }
});


// Delete a property
router.delete("/:id", async (req, res) => {
  try {
    await Property.findByIdAndDelete(req.params.id);
    res.json({ message: "Property deleted" });
  } catch (err) {
    res.status(500).json({ error: "Failed to delete property" });
  }
});

export default router;

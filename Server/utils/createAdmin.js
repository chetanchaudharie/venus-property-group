// utils/createAdmin.js
import mongoose from "mongoose";
import dotenv from "dotenv";
import bcrypt from "bcryptjs";
import Admin from "../models/Admin.js";

dotenv.config({ path: "../.env" });

const createAdmin = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);

    const hashedPassword = await bcrypt.hash("12345678", 10);

    const adminExists = await Admin.findOne({ email: "chetan@exampl.com" });
    if (adminExists) {
      console.log("❗ Admin already exists");
      return mongoose.disconnect();
    }

    const admin = new Admin({
      email: "chetan@exampl.com",
      password: hashedPassword,
    });

    await admin.save();
    console.log("✅ Admin user created!");

    mongoose.disconnect();
  } catch (err) {
    console.error("❌ Error creating admin:", err);
    mongoose.disconnect();
  }
};

createAdmin();

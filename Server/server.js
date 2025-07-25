import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import adminRoutes from "./routes/admin.js";
import propertyRoutes from "./routes/propertyRoutes.js";

dotenv.config();
connectDB();

const app = express();
const allowedOrigins = [
  'https://venus-property-group.vercel.app',
];

app.use(cors({
  origin: allowedOrigins,
  credentials: true,
}));

app.use(cors());
app.use(express.json()); 

app.use("/api/admin", adminRoutes);
app.use("/api/properties", propertyRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));

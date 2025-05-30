// packages
import path from "path";
import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";

// Utiles
import connectDB from "./config/db.js";
import userRoutes from "./routes/userRoutes.js";
import categoryRoutes from "./routes/categoryRoutes.js";
import productRoutes from "./routes/productRoutes.js";
import uploadRoutes from "./routes/uploadRoutes.js";
import petRoutes from "./routes/petRoutes.js";
import couponRoutes from "./routes/couponRoutes.js";
import petRequestRoutes from "./routes/petrequestsRoutes.js";
import orderRoutes from "./routes/orderRoutes.js";
import serviceRoutes from "./routes/serviceRoutes.js";
import appointmentRoutes from "./routes/appointmentRoutes.js";
import complaintRoutes from "./routes/complaintRoutes.js";
import cartRoutes from "./routes/cartRoutes.js";

import cors from "cors";

dotenv.config();
const port = process.env.PORT || 5000;

connectDB();

const app = express();

app.use(cors({ 
    origin: ['http://localhost:5173', 'https://471petshop-3.vercel.app'], 
    credentials: true 
  }));
  
// ✅ Handle preflight requests globally
app.options('*', cors());

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

app.use("/api/users", userRoutes);
app.use("/api/category", categoryRoutes);
app.use("/api/products", productRoutes);
app.use("/api/upload", uploadRoutes);
app.use("/api/pets", petRoutes);
app.use("/api/coupons", couponRoutes);
app.use("/api/requests", petRequestRoutes);
app.use("/api/orders", orderRoutes);
app.use("/api/services", serviceRoutes);
app.use("/api/appointments", appointmentRoutes);
app.use("/api/complaints", complaintRoutes);
app.use("/api/cart", cartRoutes);


const __dirname = path.resolve();
app.use("/uploads", express.static(path.join(__dirname + "/uploads")));

app.listen(port, () => console.log(`Server running on port: ${port}`));

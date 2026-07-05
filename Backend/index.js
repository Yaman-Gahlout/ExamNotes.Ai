import express from "express";
import dotenv from "dotenv";
import connectDB from "./utils/db.js";
import dns from "dns";
import authRoutes from "./routes/auth.route.js";
import cors from "cors";
import cookieParser from "cookie-parser";
import userRoutes from "./routes/user.route.js";
import notesRoutes from "./routes/notes.route.js";
import paymentRoute from "./routes/payment.route.js";

dns.setServers(["1.1.1.1", "8.8.8.8"]);

dotenv.config();
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(
  cors({
    origin: "https://examnotes-ai-ytdj.onrender.com/",
    credentials: true,
  }),
);
app.use(cookieParser());
app.use("/auth", authRoutes);
app.use("/users", userRoutes);
app.use("/notes", notesRoutes);
app.use("/payments", paymentRoute);

app.listen(process.env.PORT, () => {
  console.log(`Server running at ${process.env.PORT} port.`);
  connectDB();
});

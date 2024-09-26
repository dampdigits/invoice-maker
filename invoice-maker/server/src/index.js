import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import randomDataRouter from "./routes/random.route.js";
import authRouter from "./routes/auth.router.js";
import invoiceRouter from "./routes/invoice.router.js";
import analyticsRouter from "./routes/analytics.router.js";
import PDFDocument from "pdfkit-table";
const app = express();
dotenv.config();
app.use(
  cors({
    origin: process.env.FRONTEND_URL,
    credentials: true,
  })
);
app.use(express.json());
app.use(cookieParser());

connectDB();

const port = process.env.PORT;

app.use("/api/v1/data", randomDataRouter);
app.use("/api/v1/auth", authRouter);
app.use("/api/v1/invoice", invoiceRouter);
app.use("/api/v1/analytics", analyticsRouter);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

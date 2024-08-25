const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const connectDB = require("./config/db");
const { notFound, errorHandler } = require("./middleware/errorMiddleware");

dotenv.config();
connectDB();

const app = express();

app.use(express.json());
app.use(cors());

// Basic security headers (optional)
const helmet = require("helmet");
app.use(helmet());

// API Routes
app.use("/api/auth", require("./routes/authRoutes"));
app.use("/api/banks", require("./routes/bankRoutes"));
app.use("/api/deals", require("./routes/dealRoutes"));

// Root route
app.get("/", (req, res) => {
  res.send("API is running...");
});

// 404 Error handling
app.use(notFound);

// Custom Error handling middleware
app.use(errorHandler);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

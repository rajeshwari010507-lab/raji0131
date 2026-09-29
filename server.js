const express = require("express");
const connectDB = require("./config/db");

const userRoutes = require("./routes/userRoutes");
const blogRoutes = require("./routes/blogRoutes");

const app = express();

// Connect to MongoDB
connectDB();

// Middleware
app.use(express.json());

// Routes
app.use("/api/users", userRoutes);
app.use("/api/blogs", blogRoutes);

// Home/Test API
app.get("/", (req, res) => {
    res.send("AI BlogNest API is running!");
});

// Server Port
const PORT = 5000;

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
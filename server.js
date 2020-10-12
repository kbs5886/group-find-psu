require("dotenv").config();
const express = require("express");
const app = express();
const connectDB = require("./utils/connectDB");

const PORT = process.env.PORT || 3000;

// Routes
const authRoutes = require("./routes/auth");

// Utils
connectDB();

// Middlewares
app.use(express.json());

if (process.env.NODE_ENV == "production") {
    app.use(express.static("./client/Dist"));
    console.log("production");
}

app.use("/auth", authRoutes);

app.get("/", (req, res) => {
    res.json("Home page");
});

app.listen(PORT, () => {
    console.log(`Listening on http://localhost:${PORT}`);
});

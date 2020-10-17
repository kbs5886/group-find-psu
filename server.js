require("dotenv").config();
const express = require("express");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const app = express();
const connectDB = require("./utils/connectDB");

const PORT = process.env.PORT || 5000;

// Routes
const authRoutes = require("./routes/auth");

// Utils
connectDB();

// Middlewares
app.use(cors());
app.use(cookieParser());
app.use(express.json());

if (process.env.NODE_ENV == "production") {
    app.use(express.static("./client/build"));
    console.log("production");
}

app.use("/auth", authRoutes);

app.get("/", (req, res) => {
    res.json("Home page");
});

app.listen(PORT, () => {
    console.log(`Listening on http://localhost:${PORT}`);
});

require("dotenv").config();
const path = require("path");
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

app.use("/auth", authRoutes);

if (process.env.NODE_ENV == "production") {
    console.log("production");
    app.use(express.static("./client/build"));
    app.get("*", (req, res) => {
        res.sendFile(__dirname + "/client/build/index.html");
    });
}

app.listen(PORT, () => {
    console.log(`Listening on http://localhost:${PORT}`);
});

const mongoose = require("mongoose");

const options = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
};

const connectDB = () => {
    return mongoose.connect(process.env.MONGO_URI, options, (err) => {
        if (err) throw err;
        console.log("Connected to MongoDB...");
    });
};

module.exports = connectDB;

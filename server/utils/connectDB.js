const mongoose = require("mongoose");

const options = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
};

module.exports = async () => {
    return await mongoose.connect(process.env.MONGO_URI, options, (err) => {
        if (err) throw err;
        console.log("Connected to MongoDB...");
    });
};

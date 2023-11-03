const mongoose = require("mongoose");

require("dotenv").config();

const DB_URI = process.env.MONGODB_URI || "mongodb://localhost:27017"

const connectToDB = async () => {
    try {
        await mongoose.connect(DB_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });

        console.log("Connected to MongoDB !");
    }
    catch (error) {
        console.log("MongoDB Connection Error");
        console.log(error);
    }
}

module.exports = {connectToDB};
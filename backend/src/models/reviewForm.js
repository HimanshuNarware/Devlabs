const mongoose = require("mongoose");

const reviewFormSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    msg: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model("reviewForm", reviewFormSchema);
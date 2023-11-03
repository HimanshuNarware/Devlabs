const mongoose = require("mongoose");

const OpenSourceSchema = new mongoose.Schema({
    projectName: {
        type: String,
        required: true,
    },
    ownerUsername: {
        type: String,
        required: true,
    },
    tags: {
        type: [String],
        required: true
    },
    link: {
        type: String,
        required: true,
        unique: true
    },
    description: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model("openSource", OpenSourceSchema);
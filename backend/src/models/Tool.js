const mongoose = require("mongoose");

const ToolSchema = new mongoose.Schema({
    productName: {
        type: String,
        required: true
    },
    category: {
        type: String,
        enum: ['remote', 'resume', 'tweet', 'ai', 'ethical', 'movies', 'extensions', 'tools'],
        required: true
    },
    image: {
        type: String,
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

module.exports = mongoose.model("tool", ToolSchema);
const bodyParser = require("body-parser");
const cors = require("cors");

const express = require("express");
const app = express();

require("dotenv").config();

app.use("/public", express.static("public"));
app.use(bodyParser.json({ limit: "50mb" }));
app.use(bodyParser.urlencoded({ extended: true, limit: "50mb" }));

app.use(cors({
    origin: process.env.FRONTEND_URL.replace(/"/g, ""),
    credentials: true
}));

app.get("/", async (req, res) => { return res.status(200).json({message: "Welcome to DevLabs Backend!"}) });

app.use("/special", require("./routes/special"));
app.use("/tools", require("./routes/tools"));
app.use("/open-source", require("./routes/openSource"));

module.exports = app;
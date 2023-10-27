const Tool = require("../models/Tool");
require("dotenv").config();

const addTool = async (req, res) => {
    try {
        const {productName, category, image, link, description} = req.body;
        const newTool = await Tool.create({
            productName, category, image, link, description
        })

        if (!newTool)
            return res.statsu(401).json({ success: false, errors: ["Issue Adding the Tool"] });
        
        return res.status(201).json({ success: true });
    }
    catch (error) {
        console.log(error);
        return res.status(500).json({ success: false, errors: ["Internal Server Error"] });
    }
}

const fetchAllTools = async (req, res) => {
    try{
        const tools = await Tool.find();
        return res.status(200).json({ success: true, tools: tools });
    }
    catch (error) {
        console.log(error);
        return res.status(500).json({ success: false, errors: ["Internal Server Error"] });
    }
}

module.exports = { addTool, fetchAllTools };
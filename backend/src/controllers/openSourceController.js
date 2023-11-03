const OpenSource = require("../models/OpenSource");
require("dotenv").config();

const addProject = async (req, res) => {
    try {
        const {projectName, ownerUsername, tags, link, description} = req.body;
        const newProject = await OpenSource.create({
            projectName, ownerUsername, tags, link, description
        })

        if (!newProject)
            return res.statsu(401).json({ success: false, errors: ["Issue Adding the Tool"] });
        
        return res.status(201).json({ success: true });
    }
    catch (error) {
        console.log(error);
        return res.status(500).json({ success: false, errors: ["Internal Server Error"] });
    }
}

const fetchAllProjects = async (req, res) => {
    try {
        const openSourceProjects = await OpenSource.find();
        return res.status(200).json({ success: true, openSourceProjects: openSourceProjects });
    }
    catch (error) {
        console.log(error);
        return res.status(500).json({ success: false, errors: ["Internal Server Error"] });
    }
}

module.exports = { addProject, fetchAllProjects };
const OpenSource = require("../models/OpenSource");
require("dotenv").config();

const addProject = async (req, res) => {
    try {
        const { projectName, ownerUsername, tags, link, description } = req.body;

        // Validation
        if (!projectName || !ownerUsername || !link || !description) {
            return res.status(400).json({ success: false, errors: ["All fields are required"] });
        }

        const newProject = await OpenSource.create({
            projectName, ownerUsername, tags, link, description
        });

        if (!newProject) {
            return res.status(401).json({ success: false, errors: ["Issue Adding the Tool"] });
        }

        return res.status(201).json({ success: true, project: newProject });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ success: false, errors: ["Internal Server Error"] });
    }
};

const fetchAllProjects = async (req, res) => {
    try {
        const { page = 1, limit = 10 } = req.query;
        const openSourceProjects = await OpenSource.find()
            .skip((page - 1) * limit)
            .limit(limit);

        const totalProjects = await OpenSource.countDocuments();
        return res.status(200).json({
            success: true,
            openSourceProjects,
            totalPages: Math.ceil(totalProjects / limit),
            currentPage: parseInt(page)
        });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ success: false, errors: ["Internal Server Error"] });
    }
};

module.exports = { addProject, fetchAllProjects };

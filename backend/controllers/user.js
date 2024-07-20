import User from "../models/user.js";

export const getAllUsers = async (req, res, next) => {
    let users;
    try{
        users = await User.find();
        res.json(users);
    }
    catch(err){
        console.log(err);
    }
    if(!users){
        return res.status(404).json({message: "No users found"});
    }
    return res.status(200).json({users});
}

export const signup = async (req, res, next) => {
    const { name, email, password } = req.body;

    try {
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ message: "User already exists" });
        }

        const newUser = new User({ name, email, password });
        await newUser.save();

        return res.status(201).json({ message: "User created successfully", users });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: "An error occurred" });
    }
}

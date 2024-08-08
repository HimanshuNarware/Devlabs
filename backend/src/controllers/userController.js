const User = require("../models/User");
const passwordHash = require("password-hash");
const jwt = require("jsonwebtoken");
const ExpressError = require("../config/ExpressError");
const Tool = require("../models/Tool");

require("dotenv").config();

const newUser = async (req, res) => {


  try {
    const { name, username, password } = req.body;
    if (!password || typeof password !== 'string' || password.trim().length === 0) 
      {
      return res.status(400).json({ error: 'Invalid password' });
    }
    const hashedPassword = passwordHash.generate(password);
   
    const newData = new User({
      name: name,
      username: username,
      password: hashedPassword,
    });
    await newData.save();
    let token = jwt.sign(
      {
        username: username,
      },
      process.env.JWT_PASS
    );
    res.send(token);
  } catch (err) {
    console.log(err);
    return res
      .status(500)
      .json({ success: false, errors: ["Internal Server Error"] });
  }
};

const signIn = async (req, res) => {
  try {
    const { username, password } = req.body;
    const findUser = await User.findOne({ username: username });
    if (findUser != null) {
      let storedPassword = findUser.password;
      if (passwordHash.verify(password, storedPassword)) {
        let token = jwt.sign(
          {
            username: username,
          },
          process.env.JWT_PASS
        );
        res.send(token);
      } else {
        throw new ExpressError(403, "Wrong Password!");
      }
    } else {
      throw new ExpressError(404, "Username not found!");
    }
  } catch (err) {
    console.log(err);
    return res
      .status(500)
      .json({ success: false, errors: ["Internal Server Error"] });
  }
};

const addBookmark = async (req, res) => {
  try {
    const { username, id } = req.body; //id of tool which is being bookmarked
    let findUser = await User.findOne({ username: username });
    if (findUser != null) {
      let findTool = await Tool.findById(id);
      if (findTool != null) {
        findUser.bookmarks.push(findTool);
        await findUser.save();
        res.send("Bookmark added!");
      } else {
        throw new ExpressError(404, "Tool not found!");
      }
    } else {
      throw new ExpressError(404, "User not found!");
    }
  } catch (err) {
    console.log(err);
    return res
      .status(500)
      .json({ success: false, errors: ["Internal Server Error"] });
  }
};

module.exports = { newUser, signIn, addBookmark };

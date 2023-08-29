const bcrypt = require("bcrypt");
const UserModel = require("../models/UserModel");
const createJwtToken = require("../utils/common");

const registerUser = async (req, res) => {
  try {
    const { username, email, password, ...rest } = req.body;

    // Check if a user with the provided email or username already exists
    const existingUser = await UserModel.findOne({
      $or: [{ email }, { username }],
    });
    if (existingUser) {
      return res
        .status(400)
        .json({ message: "Email or username already exists" });
    }

    // Perform additional validation on other fields if needed

    // Hash the password using bcrypt
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create a new user document
    const newUser = new UserModel({
      username,
      email,
      password: hashedPassword,
      ...rest,
    });

    // Save the user to the database
    await newUser.save();

    return res
      .status(201)
      .json({ message: "User registered successfully", user: newUser });
  } catch (error) {
    return res
      .status(500)
      .json({ message: "An error occurred", error: error.message });
  }
};
const loginUser = async (req, res) => {
  try {
    const { usernameOrEmail, password } = req.body;

    // Find the user by either username or email
    const user = await UserModel.findOne({
      $or: [{ email: usernameOrEmail }, { username: usernameOrEmail }],
    });
    console.log(user);
    if (!user) {
      return res.status(401).json({ message: "User not found" });
    }

    const passwordMatch = await bcrypt.compare(password, user.password);
    if (!passwordMatch) {
      return res.status(401).json({ message: "Invalid password" });
    }

    const token = createJwtToken(user._id);

    return res.status(200).json({ message: "Login successful", token });
  } catch (error) {
    return res
      .status(500)
      .json({ message: "An error occurred", error: error.message });
  }
};
const logout = async (req, res) => {
  res.status(200).json({
    message: "Logout Route",
  });
};

module.exports = { registerUser, loginUser, logout };

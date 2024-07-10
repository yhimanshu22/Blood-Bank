const userModel = require("../models/userModel");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const registerController = async (req, res) => {
  try {
    // Check if user with the provided email already exists
    const existingUser = await userModel.findOne({ email: req.body.email });

    if (existingUser) {
      return res.status(400).json({
        success: false,
        message: "User already exists",
      });
    }

    // Generate salt and hash the password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(req.body.password, salt);

    // Create a new user object with hashed password
    const newUser = new userModel({
      name: req.body.name,
      email: req.body.email,
      password: hashedPassword,
      phone: req.body.phone, 
      address: req.body.address, 
      role: req.body.role,
    });

    // Save the new user to the database
    await newUser.save();

    // Return success response
    return res.status(201).json({
      success: true,
      message: "User registered successfully",
      user: newUser,
    });
  } catch (error) {
    console.error("Error in registerController:", error);
    return res.status(500).json({
      success: false,
      message: "Error in Register API",
      error: error.message,
    });
  }
};


const loginController = async (req, res) => {
  try {
    // Find user by email in the database
    const user = await userModel.findOne({ email: req.body.email });

    // If user is not found, return 404 with error message
    if (!user) {
      return res.status(404).json({
        success: false,
        message: "Invalid credentials",
      });
    }

    // Compare the provided password with the hashed password in the database
    const comparePassword = await bcrypt.compare(req.body.password, user.password);

    // If passwords do not match, return 401 with error message
    if (!comparePassword) {
      return res.status(401).json({
        success: false,
        message: "Password is incorrect",
      });
    }

    // Generate JWT token for authentication
    const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, {
      expiresIn: "1d",
    });

    // Return success response with token and user details
    return res.status(200).json({
      success: true,
      message: "Login successfull",
      token,
      user,
    });
  } catch (error) {
    // Handle errors
    console.error("Error in loginController:", error);
    return res.status(500).json({
      success: false,
      message: "Error in Login API",
      error: error.message,
    });
  }
};


const currentUserController = async (req, res) => {
  try {
    const user = await userModel.findById(req.body.userId);

    if (!user) {
      return res.status(404).json({
        success: false,
        message: "User not found",
      });
    }

    return res.status(200).json({
      success: true,
      message: "User fetched successfully",
      user,
    });
  } catch (error) {
    console.error("Error in currentUserController:", error);
    
    res.status(500).json({
      success: false,
      message: "Unable to get current user",
      error: error.message,
    });
  }
};

module.exports = { registerController, loginController, currentUserController };

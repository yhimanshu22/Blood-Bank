const userModel = require("../models/userModel");

module.exports = async (req, res, next) => {
  try {
    // Find user by userId from request body
    const user = await userModel.findById(req.body.userId);

    // Check if user exists and is an admin
    if (!user || user.role !== "admin") {
      return res.status(401).json({
        success: false,
        message: "Authentication Failed: User is not authorized as admin",
      });
    }

    // If user is admin, proceed to the next middleware or route handler
    next();
  } catch (error) {
    console.error("Error in admin authentication middleware:", error);
    return res.status(500).json({
      success: false,
      message: "Internal server error",
      error: error.message,
    });
  }
};

const JWT = require("jsonwebtoken");

module.exports = (req, res, next) => {
  try {
    // Extract token from Authorization header
    const token = req.headers["authorization"] && req.headers["authorization"].split(" ")[1];

    // Check if token exists
    if (!token) {
      return res.status(401).json({
        success: false,
        message: "Authorization token is missing",
      });
    }

    // Verify token
    JWT.verify(token, process.env.JWT_SECRET, (err, decoded) => {
      if (err) {
        return res.status(401).json({
          success: false,
          message: "Authentication failed: Invalid token",
        });
      } else {
        // Attach decoded userId to request body
        req.body.userId = decoded.userId;
        next();
      }
    });
  } catch (error) {
    console.error("Error in JWT authentication middleware:", error);
    return res.status(500).json({
      success: false,
      message: "Internal server error",
      error: error.message,
    });
  }
};

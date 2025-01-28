const express = require("express");
const authenticateToken = require("../middleware/authMiddleware");

const router = express.Router();

// Example of a protected route
router.get("/dashboard", authenticateToken, (req, res) => {
  res.status(200).json({ message: "Welcome to your dashboard!", user: req.user });
});

module.exports = router;

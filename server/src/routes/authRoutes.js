const express = require("express");
const router = express.Router();
const authControllers = require("../controllers/authControllers");

router.post("/register", authControllers.registerUser);
router.post("/login", authControllers.loginUser);
router.post("/logout", authControllers.logout);
router.post("/refresh", authControllers.handleRefreshToken);

module.exports = router;

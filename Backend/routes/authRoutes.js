const express = require("express");
const { register, login, logout, getProfile, updateProfile } = require("../controllers/authController");
const { protect } = require("../middlewares/authMiddleware");
const { registerValidator, loginValidator, updateProfileValidator } = require("../validators/authValidator");

const router = express.Router();

router.post("/register", registerValidator, register);
router.post("/login", loginValidator, login);
router.post("/logout", logout);
router.get("/profile", protect, getProfile);
router.put("/profile", protect, updateProfileValidator, updateProfile);

module.exports = router;

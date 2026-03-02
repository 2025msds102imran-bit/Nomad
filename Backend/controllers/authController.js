const { validationResult } = require("express-validator");
const User = require("../models/User");
const generateToken = require("../utils/generateToken");

// @desc    Register a new user
// @route   POST /api/auth/register
const register = async (req, res, next) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ message: errors.array()[0].msg });
    }

    const { companyName, email, password, role, contactNumber, location, registrationNo } = req.body;

    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: "User with this email already exists" });
    }

    const user = await User.create({
      companyName,
      email,
      password,
      role,
      contactNumber,
      location,
      registrationNo,
    });

    const token = generateToken(res, user._id);

    res.status(201).json({
      _id: user._id,
      companyName: user.companyName,
      email: user.email,
      role: user.role,
      contactNumber: user.contactNumber,
      location: user.location,
      registrationNo: user.registrationNo,
      token,
    });
  } catch (error) {
    next(error);
  }
};

// @desc    Login user
// @route   POST /api/auth/login
const login = async (req, res, next) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ message: errors.array()[0].msg });
    }

    const { email, password, role } = req.body;

    const user = await User.findOne({ email }).select("+password");
    if (!user) {
      return res.status(401).json({ message: "Invalid email or password" });
    }

    if (role && user.role !== role) {
      return res.status(401).json({ message: `This account is not registered as ${role}` });
    }

    const isMatch = await user.matchPassword(password);
    if (!isMatch) {
      return res.status(401).json({ message: "Invalid email or password" });
    }

    const token = generateToken(res, user._id);

    res.json({
      _id: user._id,
      companyName: user.companyName,
      email: user.email,
      role: user.role,
      contactNumber: user.contactNumber,
      location: user.location,
      registrationNo: user.registrationNo,
      token,
    });
  } catch (error) {
    next(error);
  }
};

// @desc    Logout user (clear cookie)
// @route   POST /api/auth/logout
const logout = (req, res) => {
  res.cookie("jwt", "", { httpOnly: true, expires: new Date(0) });
  res.json({ message: "Logged out successfully" });
};

// @desc    Get current user profile
// @route   GET /api/auth/profile
const getProfile = async (req, res, next) => {
  try {
    const user = await User.findById(req.user._id);
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    res.json({
      _id: user._id,
      companyName: user.companyName,
      email: user.email,
      role: user.role,
      contactNumber: user.contactNumber,
      location: user.location,
      registrationNo: user.registrationNo,
    });
  } catch (error) {
    next(error);
  }
};

// @desc    Update current user profile
// @route   PUT /api/auth/profile
const updateProfile = async (req, res, next) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ message: errors.array()[0].msg });
    }

    const user = await User.findById(req.user._id);
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    const { companyName, email, contactNumber, location, registrationNo } = req.body;

    if (companyName) user.companyName = companyName;
    if (email) user.email = email;
    if (contactNumber !== undefined) user.contactNumber = contactNumber;
    if (location !== undefined) user.location = location;
    if (registrationNo !== undefined) user.registrationNo = registrationNo;

    const updated = await user.save();

    res.json({
      _id: updated._id,
      companyName: updated.companyName,
      email: updated.email,
      role: updated.role,
      contactNumber: updated.contactNumber,
      location: updated.location,
      registrationNo: updated.registrationNo,
    });
  } catch (error) {
    next(error);
  }
};

module.exports = { register, login, logout, getProfile, updateProfile };

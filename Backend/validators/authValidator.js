const { body } = require("express-validator");

const registerValidator = [
  body("companyName")
    .trim()
    .notEmpty()
    .withMessage("Company name is required"),
  body("email")
    .trim()
    .isEmail()
    .withMessage("Please provide a valid email")
    .normalizeEmail(),
  body("password")
    .isLength({ min: 6 })
    .withMessage("Password must be at least 6 characters"),
  body("role")
    .optional()
    .isIn(["Company", "Recruiter", "Agency"])
    .withMessage("Invalid role"),
  body("contactNumber").optional().trim(),
  body("location").optional().trim(),
  body("registrationNo").optional().trim(),
];

const loginValidator = [
  body("email")
    .trim()
    .isEmail()
    .withMessage("Please provide a valid email")
    .normalizeEmail(),
  body("password").notEmpty().withMessage("Password is required"),
  body("role")
    .optional()
    .isIn(["Company", "Recruiter", "Agency"])
    .withMessage("Invalid role"),
];

const updateProfileValidator = [
  body("companyName").optional().trim().notEmpty().withMessage("Company name cannot be empty"),
  body("email").optional().trim().isEmail().withMessage("Please provide a valid email").normalizeEmail(),
  body("contactNumber").optional().trim(),
  body("location").optional().trim(),
  body("registrationNo").optional().trim(),
];

module.exports = { registerValidator, loginValidator, updateProfileValidator };

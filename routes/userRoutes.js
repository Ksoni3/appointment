const express = require("express");
const {
  loginController,
  registerController,
  authController,
} = require("../controllers/userControllers");
const authMiddleware = require("../middlewares/authmiddleware");

//router object
const router = express.Router();

//login
router.post("/login", loginController);

//register

router.post("/register", registerController);

//auth

router.post("/getUserData", authMiddleware, authController);

module.exports = router;

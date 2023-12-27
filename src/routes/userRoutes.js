
const express = require("express");
const bcrypt = require("bcryptjs");
const router = express.Router();
const userController = require("../controllers/user.controller");


router.post("/register", userController.registerUser);
router.post("/login", userController.loginUser);


module.exports = router;

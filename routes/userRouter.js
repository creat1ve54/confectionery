const express = require("express");
const router = express.Router();

const userController = require("../controllers/userControll");
const authMiddleware = require("../middleware/authMiddleware.js");

//login
router.post("/login", userController.login);
//registration
router.post("/registration", userController.registration);
// get me
// router.get("/me", authMiddleware, userController.getMe);
router.get("/me", userController.getMe);

module.exports = router;

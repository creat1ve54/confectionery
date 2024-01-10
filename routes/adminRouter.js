const express = require("express");
const router = express.Router();

const authMiddleware = require("../middleware/authMiddleware.js");
const adminControll = require("../controllers/adminControll.js");

//login
router.post("/login", adminControll.login);
//registration
router.post("/registration", adminControll.registration);
// get me
router.get("/check", authMiddleware, adminControll.check);

module.exports = router;

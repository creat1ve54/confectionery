const express = require("express");
const cartControll = require("../controllers/cartControll");
const router = express.Router();

//login
router.post("/send", cartControll.send);
//registration

module.exports = router;

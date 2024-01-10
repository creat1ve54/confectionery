const express = require("express");
const router = express.Router();

const authMiddleware = require("../middleware/authMiddleware.js");
const cardControll = require("../controllers/cardControll.js");

router.post("/", authMiddleware, cardControll.create);

router.delete("/:id", authMiddleware, cardControll.delete);

router.put("/:id", authMiddleware, cardControll.edit);

router.get("/search/:text", cardControll.searchCards);

router.get("/", cardControll.getCards);

router.get("/:cardNameTranslate", cardControll.getCard);

module.exports = router;

const express = require("express");
const router = express.Router();

const authMiddleware = require("../middleware/authMiddleware.js");
const cardControll = require("../controllers/cardControll.js");

router.post("/", authMiddleware, cardControll.create);

router.delete("/:id", authMiddleware, cardControll.delete);

router.put("/", authMiddleware, cardControll.edit);

// router.get("/filter/:text/:tags/:sort", cardControll.filterCards);
router.get("/filter", cardControll.filterCards);

router.get("/", cardControll.getCards);

router.get("/:cardNameTranslate", cardControll.getCard);

module.exports = router;

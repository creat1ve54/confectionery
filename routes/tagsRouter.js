const express = require("express");
const router = express.Router();

const tagsControll = require("../controllers/tagsControll.js");

router.post("/", tagsControll.create);

router.delete("/:id",  tagsControll.delete);

router.get("/all", tagsControll.getAll);

router.get("/", tagsControll.getTag);


module.exports = router;

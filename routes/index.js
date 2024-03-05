const Router = require("express");
const router = new Router();

const cartRouter = require("./cartRouter");
const adminRouter = require("./adminRouter");
const cardRouter = require("./cardRouter");
const tagsRouter = require("./tagsRouter");

router.use("/cart", cartRouter);
router.use("/admin", adminRouter);
router.use("/card", cardRouter);
router.use("/tags", tagsRouter);

module.exports = router;

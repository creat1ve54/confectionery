const Router = require("express");
const router = new Router();

const userRouter = require("./userRouter");
const adminRouter = require("./adminRouter");
const cardRouter = require("./cardRouter");
const tagsRouter = require("./tagsRouter");

router.use("/user", userRouter);
router.use("/admin", adminRouter);
router.use("/card", cardRouter);
router.use("/tags", tagsRouter);

module.exports = router;

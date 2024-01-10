const Router = require("express");
const router = new Router();

const userRouter = require("./userRouter");
const adminRouter = require("./adminRouter");
const cardRouter = require("./cardRouter");

router.use("/user", userRouter);
router.use("/admin", adminRouter);
router.use("/card", cardRouter);

module.exports = router;

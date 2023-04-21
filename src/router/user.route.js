const Router = require("koa-router");
const router = new Router({ prefix: "/users" });
const {
  userValidator,
  verifyUser,
  crpytPassword,
} = require("../middleware/user.middleware");
const { register } = require("../controller/user.controller");

// 注册
router.post("/register", userValidator, verifyUser, crpytPassword, register);

module.exports = router;

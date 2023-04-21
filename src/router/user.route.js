const Router = require("koa-router");
const router = new Router({ prefix: "/users" });
const {
  userValidator,
  verifyUser,
  crpytPassword,
  verifyLogin,
} = require("../middleware/user.middleware");
const { register,login } = require("../controller/user.controller");

// 注册
router.post("/register", userValidator, verifyUser, crpytPassword, register);

//登录
router.post("/login", userValidator, verifyLogin, login);

module.exports = router;

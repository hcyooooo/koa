const Koa = require("Koa");

const { APP_PORT } = require("./config/config.default");
const userRouter = require("./router/user.route");

const app = new Koa();

app.use(userRouter.routes());

app.listen(APP_PORT, () => {
  console.log(`server is running on http://localhost:${APP_PORT}`);
});

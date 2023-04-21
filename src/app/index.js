//服务层
const Koa = require("Koa");
const { koaBody } = require("koa-body");
const errHandler = require('./errHandler')

const userRouter = require("../router/user.route");
const app = new Koa();

app.use(koaBody());
app.use(userRouter.routes());
app.on('error',errHandler)

module.exports = app;

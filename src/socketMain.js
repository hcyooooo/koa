const Koa = require("koa");
const { APP_PORT } = require("./config/config.default");
const WebSocket = require("ws");

const ws = new WebSocket.Server({ port: 8888 });

ws.on("connection", (ws) => {
  console.log("server connection");

  ws.on("message", (msg) => {
    console.log("server receive msg：", msg);
  });

  ws.send("Information from the server");
});

const app = new Koa();

app.listen(APP_PORT, () => {
  console.log(`server is running on http://localhost:${APP_PORT}`);
});

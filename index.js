// @ts-check
const CORS = require("@pxe/cors");
const Server = require("@pxe/server");
const { staticDir, routesSync } = require("@pxe/utils");

const app = new Server();

app.use(new CORS());
app.use(staticDir("public"));
app.use(...routesSync("routes"));

app.ls(Number(process.env.PORT || 8080));
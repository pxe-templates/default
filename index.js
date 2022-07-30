// @ts-check
const CORS = require("@pxe/cors");
const Server = require("@pxe/server");
const { staticDir } = require("@pxe/utils");
const getAllExports = require("./utils/getAllExports");

const app = new Server();

app.use(new CORS());
app.use(staticDir("public"));
app.use(...getAllExports("routes"));

app.ls(Number(process.env.PORT || 8080));
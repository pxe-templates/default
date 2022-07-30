const Router = require("@pxe/router");

const apiRoot = new Router("/api/");

apiRoot.handle("/hello", require("./hello"));

module.exports = apiRoot;
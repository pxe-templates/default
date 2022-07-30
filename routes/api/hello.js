/**
 * @type {import("@pxe/router").RouteHandler}
 */
module.exports = {
    all(ctx) {
        ctx.response.body = "Hello";
    }
};
// @ts-check
const fs = require("fs");
const path = require("path/posix");

/**
 * @param {string} dir 
 * @returns {import("@pxe/router")[]}
 */
function getAllExports(dir) {
    const list = [];

    for (const file of fs.readdirSync(dir)) {
        const filePath = path.resolve(dir, file);

        if (filePath.endsWith("index.js"))
            list.push(require(filePath));
        else if (fs.statSync(filePath).isDirectory())
            list.push(...getAllExports(filePath));
    }

    return list;
}

module.exports = getAllExports;
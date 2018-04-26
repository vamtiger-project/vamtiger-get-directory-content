"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = require("fs");
const util_1 = require("util");
const BlueBird = require("bluebird");
const getDirectoryContent = util_1.promisify && util_1.promisify(fs_1.readdir) || BlueBird.promisify(fs_1.readdir);
exports.default = getDirectoryContent;
//# sourceMappingURL=index.js.map
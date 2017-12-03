"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = require("fs");
const Promise = require("bluebird");
exports.default = Promise.promisify(fs_1.readdir);
//# sourceMappingURL=index.js.map
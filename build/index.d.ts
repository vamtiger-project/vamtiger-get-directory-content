/// <reference types="node" />
import { readdir } from 'fs';
declare const getDirectoryContent: typeof readdir.__promisify__;
export default getDirectoryContent;

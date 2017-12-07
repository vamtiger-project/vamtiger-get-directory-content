import { readdir, PathLike } from 'fs';
import { promisify } from 'util';

export default promisify(readdir);